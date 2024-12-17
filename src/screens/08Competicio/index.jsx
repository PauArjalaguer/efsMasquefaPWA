import React, { useEffect, useState, useContext } from 'react'
import BottomTabs from '../../components/bottomTabs'
import { NavLink, useParams } from 'react-router-dom';
import { http_query } from '../../functions/query';

import { MatchContext, MatchProvider } from '../../context/MatchContext';
import Classification from '../../components/03Classification';
import Matches from '../../components/04Matches';




const Competicio = () => {
    let { idLeague } = useParams();
    let [isLoadingMatches, setIsLoadingMatches] = useState(true);
    let [matches, setMatches] = useState([]);

    let [isLoadingClass, setIsLoadingClass] = useState(true);
    let [classification, setClassification] = useState([]);
    let [visibleClassification, setVisibleClassification] = useState(0);

    let [reload, setReload] = useState(0);
    const [state, setState] = useContext(MatchContext);

    const fetchClassificationData = async () => {
        let query = "SELECT  position,  teamName,  points,  played,  won,  draw,  lost,  goalsmade,  goalsreceived, g.groupName FROM classification c JOIN groups g on g.idGroup= c.idLeague  where c.idLeague=" + idLeague + " order by position";

        let params = [];
        let response = http_query(query, params).then((res) => { setClassification(res[0].results.rows);  setIsLoadingClass(false); });
    }
    const fetchMatchesData = async () => {
        let query = "select  idMatch,localName, visitorName, place,matchDate, matchHour, idRound, localImage,visitorImage, groupName, groupName, localResult, visitorResult, distance,travelTime,meteo,coordinates from matches m join groups g on g.idGroup=m.idGroup where g.idGroup =" + idLeague+ " order by idRound, matchDate, matchHour"

        let params = [];
        let response = http_query(query, params).then((res) => { setMatches(res[0].results.rows); setIsLoadingMatches(false); });
    }


    useEffect(() => {
        fetchClassificationData();
      fetchMatchesData();

    }, []);
    if (classification[0] && matches) {       
        return (
            <div className="w-screen h-screen bg-[url('/public/images/app_back.jpg')] bg-cover bg-center pt-6">
                <div id="header" className="w-screen  p-7 text-center text-white text-2xl font-bold">E.F.S. Masquefa</div>
                <div className='px-2'>
                    <div className='border-solid  border-b-0 mb-32 pb-16'>
                        <div className='bg-azure-700 p-2 font-bold rounded-t-lg text-white'>{classification[0][9]}</div>
                        <Classification classification={classification} />
                       <Matches matches={matches}></Matches> 
                      
                    </div>
                    <BottomTabs />
                </div>
            </div>
        )
    }
}

export default Competicio