import React from 'react'

function PlayerComponent({player}) {
 
    return (
       
            <div className="flex items-center px-4 py-1 border border-azure-700 rounded-lg mt-1 bg-white" key={player[0]}>
                <div className="relative">
                    <img src={`http://jok.cat/images/dynamic/playersImages/efsmasquefa/${player[0]}.png`} onError={({ currentTarget }) => {
                                currentTarget.onerror = null; // prevents looping
                                currentTarget.src = "https://clubolesapati.cat/images/dynamic/playersImages/blank.png"; }} alt={player[1]} className="w-12 h-12 rounded-full ml-2" />
                    <div className="absolute top-0 left-[-12] w-6 h-6 bg-azure-700 text-white rounded-full flex items-center justify-center text-xs">   {player[2]}</div>
                </div>
                <div className="ml-4 text-xs capitalize     text-azure-800">
                   {player[1].toLowerCase()}
                </div>
            </div>
        
    )
}

export default PlayerComponent