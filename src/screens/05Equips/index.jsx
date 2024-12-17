import React, { useState, useEffect } from 'react'
import { http_query } from '../../functions/query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbolBall, faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import BottomTabs from '../../components/bottomTabs'

const Equips = () => {
    const [teams, setTeams] = useState([]);
    const [teamString, setTeamString] = useState([]);
    const fetchTeamsData = () => {
        let query = "";
        let params = [];
        query = "select teamId as idTeam, teamName, teamAcronym from teams where idClub=1";
        //  query = "select  idMatch,localName, visitorName, place,matchDate, matchHour, idRound, localImage,visitorImage, groupName, groupName, localResult, visitorResult, distance,travelTime,meteo,coordinates from matches m join groups g on g.idGroup=m.idGroup   limit 0,1";
        params = [];
        let response = http_query(query, params).then((res) => { setTeams(res[0].results.rows); });
    }
    useEffect(() => {
        fetchTeamsData();
        setTeamString(JSON.parse(localStorage.getItem('teamString')));

    }, [setTeamString])

    const changeTeamStatusTeamPress = (idTeam, isActive) => {

        if (isActive == 0) {
      
            if (localStorage.getItem("teamString")) {
                console.log("Hi ha localstorage");
                const tString = JSON.parse(localStorage.getItem('teamString'));
                console.log("Llegeixo storage");
                console.log(tString);
                tString.push(idTeam);
                console.log("Afegeixo equip:" + idTeam);
                setTeamString(tString);
                console.log(tString);
                localStorage.setItem("teamString", JSON.stringify(tString));


            } else {
                const tString = [idTeam];
                setTeamString(tString);
                localStorage.setItem("teamString", JSON.stringify(tString));
            }
        } else {
            const tString = JSON.parse(localStorage.getItem('teamString'));
            const index = tString.indexOf(idTeam);
            if (index > -1) {
                tString.splice(index, 1);
                setTeamString(tString);
                localStorage.setItem("teamString", JSON.stringify(tString));
            }
        }
        //  console.log(teamString)

    }


    return (
        <div className="w-screen h-screen bg-slate-700 bg-[url('/public/images/app_back.jpg')] bg-cover bg-center pt-6">
            <div id="header" className="w-screen  p-7 text-center text-white text-2xl font-bold">E.F.S. Masquefa</div>
            <div className='px-2 w-full' key={1}>
                <div className='border-solid mb-32 pb-16'>
                    <div className='bg-azure-700 p-2 font-bold rounded-t-lg text-white'>Equips</div>
                    {
                        teams.map(
                            team =>
                                <div className='border border-gray-400 my-1 p-2 flex bg-white' key={team[0]}>
                                    <div className='text-xs font-bold text-azure-900 flex-1  pt-1'>
                                        <NavLink to={"/equips/" + encodeURIComponent(team[0])}><FontAwesomeIcon icon={faFutbolBall} /> {team[1]}</NavLink>
                                    </div>
                                    <div className='text-azure-900'>
                                        <FontAwesomeIcon icon={teamString && teamString.includes(team[0]) ? faToggleOn : faToggleOff}
                                            onClick={() => {
                                                changeTeamStatusTeamPress(team[0], teamString && teamString.includes(team[0]) ? 1 : 0)
                                            }} />
                                    </div>
                                </div>
                        )
                    }
                </div>
            </div>
            <BottomTabs />
        </div>
    )
}

export default Equips