import React, { useEffect, useState } from 'react'
import BottomTabs from '../../components/bottomTabs'
import { http_query } from '../../functions/query';
import { transformDate } from '../../functions/functions';

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
            query += " join groups g on g.idGroup=m.idGroup  ";
            query += " where datetime('now')  < datetime(matchDate || ' ' || matchHour)";
            query += " and (idLocal in (select teamId from teams where idClub=1) or idVisitor in (select teamId from teams where idClub=1))";
            query += " order by matchDate, matchHour limit 0,25";
        } else {
            query = "select  idMatch,localName, visitorName, place,matchDate, matchHour, idRound, localImage,visitorImage, groupName, groupName, localResult, visitorResult, distance,travelTime,meteo,coordinates from matches m join groups g on g.idGroup=m.idGroup where (idLocal in (" + string + ") or idVisitor in (" + string + ")) and datetime('now')  < datetime(matchDate || ' ' || matchHour) order by matchDate, matchHour limit 0,25";
        } params = [];
        let response = http_query(query, params).then((res) => { setMatches(res[0].results.rows); });
    }
    const [isAndroid, setIsAndroid] = useState(false);
    useEffect(() => {
        fetchMatchesData();
        const userAgent = window.navigator.userAgent.toLowerCase();
        setIsAndroid(userAgent.includes('Android'));
    }, []);
    return (
        <>
            <div className="w-screen h-screen bg-slate-700 bg-[url('/public/images/app_back.jpg')] bg-cover bg-center pt-6">
                <div id="header" className="w-screen  p-7 text-center text-white text-2xl font-bold">E.F.S. Masquefa</div>
                <div className='px-2 w-full'>
                    <div className='border-solid mb-32 pb-16'>
                        <div className='bg-azure-700 p-2 font-bold rounded-t-lg text-white'>Partits</div>
                        {
                            matches.map((match, index) =>
                                <>
                                    <div className={`bg-white border border-azure-700  mb-1  ${index === 0 ? 'rounded-b-md border-t-0' : 'rounded-md'}`}>
                                        <div className={`text-[0.6rem]  uppercase text-left text-azure-200 border border-azure-700 bg-azure-700 p-1   ${index === 0 ? '' : 'rounded-t-md'}`}>{match[9]}</div>
                                        <div className="flex justify-between items-start">
                                            <div className='w-1/4 p-1 border-solid border-azure-700 justify-items-start '>
                                                <img className='h-12  block mx-auto' src={match[7]} /> 
                                            </div>

                                            <div className="w-2/4 text-gray-500 text-[0.56rem] flex  bg-azure-700 rounded-b-md p-4 text-white shadow-md">
                                                <div className='w-4/4 justify-items-start'>
                                                    <span ><a href={match[16]} target='_blank'>{match[3]}</a></span>
                                                </div>
                                                <div className='w-4/4 justify-items-center text-right'>
                                                    {transformDate(match[4])}  {match[5]}
                                                </div>
                                            </div>

                                            <div className='w-1/4 p-1  border-solidborder-azure-700  justify-items-center '>
                                                <img className='h-12  block mx-auto' src={match[8]} />
                                            </div>

                                        </div>
                                        <div className="flex mt-2">
                                            <div className='w-1/2 border-r border-solid border-azure-700 '>
                                                <p className='text-azure-800 text-[0.7rem] font-medium text-left  text-ellipsis px-2'>{match[1]}</p>
                                            </div>
                                            <div className='w-1/2 justify-items-end'>
                                                <p className='text-azure-800 text-[0.7rem] font-medium text-right text-ellipsis px-2'>{match[2]}</p>
                                            </div>
                                        </div>
                                    </div>
                                </>

                            )
                        }
                    </div>
                </div>
                <BottomTabs />
            </div>
        </>
    )
}

export default Partits