import React, { useEffect, useState } from 'react'
import {transformDate} from '../../functions/functions';

const NextMatch = (props) => {

  return (
    <>
      <div className='border-solid'>
        <div className='bg-azure-700 p-2 font-bold rounded-t-lg text-white'>Proper partit</div>
        <div className="antialiased bg-white p-2  border border-solid border-gray-400 border-t-0 justify-items-center" >
          <div className='text-xl font-bold uppercase'>{props.nextMatch[9]}</div>
          <div className='w-full  flex mt-5 '>
            <div className='w-1/2 p-1 border-r border-solid border-slate-200  justify-items-center '>
              <img className='h-32 ' src={props.nextMatch[7]} />
              <span className='font-bold text-xs'>{props.nextMatch[1]}</span>
            </div>
            <div className='w-1/2 ml-1 p-2 justify-items-center'>
              <img className='h-32' src={props.nextMatch[8]} />
              <span className='font-bold text-xs'>{props.nextMatch[2]}</span></div>
          </div>
          <div className='w-full flex mt-3'>
            <span className='w-1/2 text-xs'><a href={props.nextMatch[16]} target='_blank'>{props.nextMatch[3]}</a></span>
            <span className='w-1/2 text-xs text-right'>{transformDate(props.nextMatch[4])}  {props.nextMatch[5]}</span>
          </div>
        </div>
      </div>

    </>

  )

}


export default NextMatch;