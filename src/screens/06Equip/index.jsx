import React, { useEffect, useState } from 'react'
import BottomTabs from '../../components/bottomTabs'
import { NavLink, useParams } from 'react-router-dom';
import { http_query } from '../../functions/query';
import NextMatch from '../../components/01NextMatch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbolBall } from '@fortawesome/free-solid-svg-icons';


const Equip = () => {
    let { idTeam } = useParams();
    const [nextMatch, setNextMatch] = useState([]);
    const [items, setItems] = useState([]);
    const fetchMatchesData = () => {
        let query = "";
        let params = [];
        query = "select  idMatch,localName, visitorName, place,matchDate, matchHour, idRound, localImage,visitorImage, groupName, groupName, localResult, visitorResult, distance,travelTime,meteo,coordinates from matches m join groups g on g.idGroup=m.idGroup where idLocal in ('" + idTeam + "') or idVisitor in ('" + idTeam + "') and datetime('now')  < datetime(matchDate || ' ' || matchHour) limit 0,1";
        params = [];
        let response = http_query(query, params).then((res) => { setNextMatch(res[0].results.rows[0]); });
    }
    const fetchLeaguesData = async () => {
    
        let query2 = "select idGroup, groupName from groups where idGroup in(select distinct idGroup from  matches where (idLocal ='"+idTeam+"')) ";
        console.log(query2);
        let params2 = [];
        let response = http_query(query2, params2).then((res) => { setItems(res[0].results.rows); });
       
    }

    useEffect(() => {
        fetchMatchesData();
        fetchLeaguesData();
    }, []);
    if (nextMatch[0]) {
        return (
            <div className="w-screen h-screen bg-slate-700 bg-[url('/public/images/app_back.jpg')] bg-cover bg-center">
                <div id="header" className="w-screen  p-7 text-center text-white text-2xl font-bold">E.F.S. Masquefa</div>
                <div className='px-2'>
                    <NextMatch nextMatch={nextMatch} />
                    {
                        items.map(
                            item =>
                                <div className='border border-gray-400 my-1 p-2 flex bg-white' key={item[0]}>
                                    <div className='text-xs font-bold text-azure-900 flex-1  pt-1'>
                                        <NavLink to={"/competicio/" + encodeURIComponent(item[0])}><FontAwesomeIcon icon={faFutbolBall} /> {item[1]}</NavLink>
                                    </div>
                                  
                                </div>
                        )
                    }
                    <BottomTabs />
                </div></div>
        )
    }
}

export default Equip