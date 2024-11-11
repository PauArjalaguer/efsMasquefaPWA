import React from 'react'
import { truncateTeamNames, shortenDate, mapa } from '../../functions/functions';
const Matches = (props) => {
    let matches = props.matches;
    let round = 0;
    return (
        <div className='mt-2'>
            {
                matches.map(
                    match => {                      
                        return (
                            <div key={match[0]}>
                                <div className={`bg-azure-700 text-white text-[12px] font-bold p-1 ${round === match[6] ? 'hidden' : ''}`}>
                                    JORNADA {round = match[6]}
                                </div>
                                <div className='flex bg-white border-l border-azure-700'>
                                    <div className='w-5/12 py-2 px-1'>
                                        <div className='flex'>
                                            <img className='w-6 px-1' src={match[7]} /><div className='sm:w-[120px] md:w-full truncate text-nowrap  text-left text-[11px] md:text-lg'>{truncateTeamNames(match[1])}</div>
                                        </div>
                                    </div>
                                    <div className='w-2/12 bg-azure-700 text-center p-1 text-white text-[11px] md:text-lg '>
                                        <span className={`${match[11] !== undefined && match[11] !== null && match[11] !== ''  ? 'font-bold' : 'hidden'}`}>{match[11]} - {match[12]}</span>
                                        <span className={` ${match[11] !== undefined && match[11] !== null && match[11] !== ''  ? 'hidden' : ''}`}
                                          onClick={() => {
                                            mapa(match[16])
                                        }}>{shortenDate(match[4])} <br />{match[5]}</span>
                                    </div>
                                    <div className='w-5/12 py-2 px-1 border-r border-azure-700 '>
                                        <div className='flex justify-end'>
                                            <div className='sm:w-[120px] md:w-full truncate text-nowrap  text-right text-[11px] md:text-lg'> {truncateTeamNames(match[2])}</div>  <img className='w-6 px-1' src={match[8]} />
                                        </div>
                                    </div>
                                </div>
                                <div className='hidden flex bg-white border-l border-r border-azure-700 p-2  text-[11px]'>{match[4]} {match[5]} {match[15]} {match[16]}</div>
                            </div>
                        )

                    }
                )
            }
        </div>
    )
}

export default Matches;