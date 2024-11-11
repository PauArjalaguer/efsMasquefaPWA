import React from 'react'
import { http_query } from '../../functions/query';
import { truncateTeamNames } from '../../functions/functions';

const classification = (props) => {
    // console.log(props.classification);
    let classification = props.classification;
    return (

        <table className='table-auto w-full text-xs bg-white'>
            <thead>
                <tr>
                    <th className='bg-azure-700 font-bold text-white border-azure-700 '>&nbsp; </th>
                    <th className='bg-azure-700 font-bold text-white border-azure-700 text-left'>Equip</th>
                    <th className='bg-azure-700 font-bold text-white border-azure-700'>&nbsp;</th>
                    <th className='bg-azure-700 font-bold text-white border-azure-700'>J</th>
                    <th className='bg-azure-700 font-bold text-white border-azure-700'>G</th>
                    <th className='bg-azure-700 font-bold text-white border-azure-700'>E</th>
                    <th className='bg-azure-700 font-bold text-white border-azure-700'>P</th>
                    <th className='bg-azure-700 font-bold text-white border-azure-700'>F</th>
                    <th className='bg-azure-700 font-bold text-white border-azure-700'>C</th>

                </tr>
            </thead>
            <tbody>
                {classification.map(
                    n => (
                        <tr key={n[0]}>
                            <td className='text-center bg-azure-700 font-bold text-white border-b border-t-0 border-azure-700 p-2'>{n[0]}</td>
                            <td className='text-nowrap border-b border-t-0 border-azure-700 px-1 py-2'>
                                <div className='w-[120px] md:w-full truncate text-[11px] lg:text-lg'>{n[1]}
                                </div>
                            </td>
                            <td className='text-center bg-azure-700 font-bold text-white border-b-1 border-t-0 border-azure-700 text-[11px] px-1 py-2' >{n[2]}</td>
                            <td className='text-center border-b border-t-0 border-azure-700 px-1 py-2'>{n[3]}</td>
                            <td className='text-center border-b border-t-0 border-azure-700 px-1 py-2'>{n[4]}</td>
                            <td className='text-center border-b border-t-0 border-azure-700 px-1 py-2'>{n[5]}</td>
                            <td className='text-center border-b border-t-0 border-azure-700 px-1 py-2'>{n[6]}</td>
                            <td className='text-center border-b border-t-0 border-azure-700 px-1 py-2'>{n[7]}</td>
                            <td className='text-center border-r border-b border-t-0 border-azure-700 px-1 py-2'>{n[8]}</td>
                        </tr>
                    )
                )
                }
            </tbody>
        </table>

    )
}

export default classification