import React, { useState, useEffect } from 'react'
import { http_query } from '../../functions/query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbolBall, faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import BottomTabs from '../../components/bottomTabs'

const Competicions = () => {
    const [teams, setTeams] = useState([]);
    const [teamString, setTeamString] = useState([]);
    const fetchLeaguesData = () => {
      let string = "";
      if (localStorage.getItem('teamString')) {
        const teamString = JSON.parse(localStorage.getItem('teamString'));
        string = teamString.map(item => `"${item}"`).join(',');
      }
        let query = "";
        let params = [];
        query = "select idGroup, groupName from groups where idGroup in(select distinct idGroup from  matches where (idLocal in(" + string + ")));";

        params = [];
        let response = http_query(query, params).then((res) => { setTeams(res[0].results.rows); });
    }
    useEffect(() => {
      fetchLeaguesData();
        setTeamString(JSON.parse(localStorage.getItem('teamString')));

    }, [setTeamString])

  


    return (
        <div className="w-screen h-screen bg-slate-700 bg-[url('/public/images/app_back.jpg')] bg-cover bg-center">
            <div id="header" className="w-screen  p-7 text-center text-white text-2xl font-bold">E.F.S. Masquefa</div>
            <div className='px-2 w-full' key={1}>
                <div className='border-solid mb-32 pb-16'>
                    <div className='bg-azure-700 p-2 font-bold rounded-t-lg text-white'>Equips</div>
                    {
                        teams.map(
                            team =>
                                <div className='border border-gray-400 my-1 p-2 flex bg-white' key={team[0]}>
                                    <div className='text-xs font-bold text-azure-900 flex-1  pt-1'>
                                        <NavLink to={"/competicio/" + encodeURIComponent(team[0])}><FontAwesomeIcon icon={faFutbolBall} /> {team[1]}</NavLink>
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

export default Competicions