import React, { useEffect, useState } from 'react'
import BottomTabs from '../../components/bottomTabs'
import { NavLink, useParams } from 'react-router-dom';
import { http_query } from '../../functions/query';
import NextMatch from '../../components/01NextMatch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbolBall } from '@fortawesome/free-solid-svg-icons';
import PlayerComponent from '../../components/07PlayerComponent';


const Equip = () => {
    let { idTeam } = useParams();
    const [nextMatch, setNextMatch] = useState([]);
    const [items, setItems] = useState([]);
    const [players, setPlayers] = useState([]);
    const fetchMatchesData = () => {
        let query = "";
        let params = [];
        query = "select  idMatch,localName, visitorName, place,matchDate, matchHour, idRound, localImage,visitorImage, groupName, groupName, localResult, visitorResult, distance,travelTime,meteo,coordinates,  datetime('now') , datetime(matchDate || ' ' || matchHour) from matches m join groups g on g.idGroup=m.idGroup where (idLocal in ('" + idTeam + "') or idVisitor in ('" + idTeam + "')) and datetime('now')  < datetime(matchDate || ' ' || matchHour) limit 0,1";
        params = [];
        http_query(query, params).then((res) => { console.log(res[0].results.rows); setNextMatch(res[0].results.rows[0]);  });
    }
    const fetchLeaguesData = async () => {

        let query2 = "select idGroup, groupName from groups where idGroup in(select distinct idGroup from  matches where (idLocal ='" + idTeam + "'))  ";
       
        let params2 = [];
        http_query(query2, params2).then((res) => { setItems(res[0].results.rows); });

    }

    const fetchPlayersData = async () => {
        let query3 = "select id, player_name, player_number from players where team_url  ='" + idTeam + "' order by player_number ";       
        let params3 = [];
        http_query(query3, params3).then((res) => { setPlayers(res[0].results.rows);});

    }

    useEffect(() => {
        fetchMatchesData();
        fetchLeaguesData();
        fetchPlayersData();
    }, []);
    if (nextMatch[0]) {
        return (
            <div className="w-screen h-screen bg-azure-700 bg-[url('/public/images/app_back.jpg')] bg-cover bg-center pt-6">
                <div id="header" className="w-screen  p-7 text-center text-white text-2xl font-bold">E.F.S. Masquefa</div>
                <div className='px-2'>
                    <NextMatch nextMatch={nextMatch} />
                    {
                        items && items.map(
                            item =>
                                <div key='123123' className='border border-azure-700 my-1 p-2 flex bg-white' >
                                    <div className='text-xs font-bold text-azure-900 flex-1  pt-1'>
                                        <NavLink to={"/competicio/" + encodeURIComponent(item[0])}><FontAwesomeIcon icon={faFutbolBall} /> {item[1]}</NavLink>
                                    </div>
                                </div>
                        )
                    }
                    <div className="grid grid-cols-1  ">
                        {players && players.map(
                            player => <PlayerComponent player={player} />
                        )}
                    </div>
                    <div className='m-12'>&nbsp;</div>

                    <BottomTabs />
                </div>
            </div>
        )
    }
}

export default Equip