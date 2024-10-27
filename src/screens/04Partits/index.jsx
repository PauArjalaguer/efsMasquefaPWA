import React, { useEffect, useState } from 'react'
import BottomTabs from '../../components/bottomTabs'
import { http_query } from '../../functions/query';
import transformDate from '../../functions/functions';

const Partits = () => {
    const [matches, setMatches] = useState([]);
    const fetchMatchesData = () => {
        let string = "";
        if (localStorage.getItem('teamString')) {
          const teamString = JSON.parse(localStorage.getItem('teamString'));
          string = teamString.map(item => `"${item}"`).join(',');
        }
        let query = "";
        let params = [];
        if (string.length == 0) {
          query = "select  idMatch,localName, visitorName, place,matchDate, matchHour, idRound, localImage,visitorImage, groupName, groupName, localResult, visitorResult, distance,travelTime,meteo,coordinates from matches m ";
          query +=" join groups g on g.idGroup=m.idGroup  ";
          query +=" where datetime('now')  < datetime(matchDate || ' ' || matchHour)";
          query +=" and (idLocal in (select teamId from teams where idClub=1) or idVisitor in (select teamId from teams where idClub=1))";
          query +=" order by matchDate, matchHour limit 0,25";

          console.log(query);
        } else {
          query = "select  idMatch,localName, visitorName, place,matchDate, matchHour, idRound, localImage,visitorImage, groupName, groupName, localResult, visitorResult, distance,travelTime,meteo,coordinates from matches m join groups g on g.idGroup=m.idGroup where (idLocal in (" + string + ") or idVisitor in (" + string + ")) and datetime('now')  < datetime(matchDate || ' ' || matchHour) order by matchDate, matchHour limit 0,25";
        } params = [];
        let response = http_query(query, params).then((res) => { setMatches(res[0].results.rows); });
    }

    useEffect(() => {
        fetchMatchesData();

    }, []);
    return (
        <>
            <div className="w-screen h-screen bg-slate-700 bg-[url('/public/images/app_back.jpg')] bg-cover bg-center">
                <div id="header" className="w-screen  p-7 text-center text-white uppercase text-4xl font-bold">E.F.S. Masquefa</div>
                <div className='px-2 w-full'>
                    <div className='border-solid mb-32 pb-16'>
                        <div className='bg-azure-700 p-2 font-bold rounded-t-lg text-white'>Partits</div>
                        {
                            matches.map(match =>
                                <div className="antialiased bg-white p-2  border border-solid border-gray-400 justify-items-center mb-2 rounded-lg"  >
                                    <div className='text-xl font-bold uppercase'>{match[9]}</div>
                                    <div className='w-full  flex mt-5 '>
                                        <div className='w-1/2 p-1 border-r border-solid border-slate-200  justify-items-center '>
                                            <img className='h-32 ' src={match[7]} />
                                            <span className='font-bold text-xs'>{match[1]}</span>
                                        </div>
                                        <div className='w-1/2 ml-1 p-2 justify-items-center'>
                                            <img className='h-32' src={match[8]} />
                                            <span className='font-bold text-xs'>{match[2]}</span></div>
                                    </div>
                                    <div className='w-full flex mt-3'>
                                        <span className='w-3/4 text-xs'><a href={match[16]} target='_blank'>{match[3]}</a></span>
                                        <span className='w-1/4 text-xs text-right'>{transformDate(match[4])}  {match[5]}</span>
                                    </div>
                                </div>)
                        }
                    </div>
                </div>
                <BottomTabs />
            </div>
        </>
    )
}

export default Partits