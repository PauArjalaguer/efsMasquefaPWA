import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbolBall, faHouse, faNewspaper, faTrophy, faUsers, faUsersBetweenLines } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { NavLink } from 'react-router-dom';

const bottomTabs = () => {
    return (
        <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-700 dark:bg-gray-700 dark:border-gray-600">
            <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
                <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <div className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <NavLink style={({ isActive }) => ({
                            color: isActive ? '#537aa4' : '#ccc',
                        })} to="/"><FontAwesomeIcon icon={faHouse} />  </NavLink>  </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 uppercase ">
                        <NavLink style={({ isActive }) => ({
                            color: isActive ? '#537aa4' : '#ccc',
                        })} to="/">Inici
                        </NavLink></span>
                </button>
                <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <div className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 " aria-hidden="true">
                        <NavLink style={({ isActive }) => ({
                            color: isActive ? '#537aa4' : '#ccc',
                        })} to="/noticies"><FontAwesomeIcon icon={faNewspaper} /></NavLink> </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 uppercase ">
                        <NavLink style={({ isActive }) => ({
                            color: isActive ? '#537aa4' : '#ccc',
                        })} to="/noticies">Notícies</NavLink>
                    </span>
                </button>
                <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <div className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <NavLink style={({ isActive }) => ({
                            color: isActive ? '#537aa4' : '#ccc',
                        })} to="/partits"> <FontAwesomeIcon icon={faFutbolBall} /> </NavLink></div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 uppercase ">
                        <NavLink style={({ isActive }) => ({
                            color: isActive ? '#537aa4' : '#ccc',
                        })} to="/partits">Partits</NavLink>
                    </span>
                </button>
                <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <div className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <NavLink style={({ isActive }) => ({
                            color: isActive ? '#537aa4' : '#ccc',
                        })} to="/equips"><FontAwesomeIcon icon={faUsers} /></NavLink>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 uppercase ">
                        <NavLink style={({ isActive }) => ({
                            color: isActive ? '#537aa4' : '#ccc',
                        })} to="/equips">Equips</NavLink>
                    </span>
                </button>
                <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <div className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" >
                        <NavLink style={({ isActive }) => ({
                            color: isActive ? '#537aa4' : '#ccc',
                        })} to="/competicio">   <FontAwesomeIcon icon={faTrophy} /></NavLink></div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 uppercase ">
                        <NavLink style={({ isActive }) => ({
                            color: isActive ? '#537aa4' : '#ccc',
                        })} to="/competicio">  Lligues</NavLink>
                    </span>
                </button>
            </div>
        </div>
    )
}
export default bottomTabs;