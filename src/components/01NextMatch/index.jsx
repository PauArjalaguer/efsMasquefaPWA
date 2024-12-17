import React, { useEffect, useState } from 'react'
import { transformDate } from '../../functions/functions';

const NextMatch = (props) => {
  const [isAndroid, setIsAndroid] = useState(false);
  const { nextMatch } = props;
  let match = nextMatch;
  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    setIsAndroid(userAgent.includes('Android'));
  }, []);

  return (
    <>
      <div className='border-solid'>
        <div className='bg-azure-700 p-2 font-bold rounded-t-lg text-white'>Proper partit</div>
        <div className='text-xs  uppercase text-left text-azure-200 bg-azure-700 p-1 pl-2'>{match[9]}</div>
        <div className={`bg-white border border-azure-700  mb-1 rounded-b-md pb-2 border-t-0`}>        
          <div className="flex justify-between items-start">
            <div className='w-1/4 p-1 border-solid border-slate-200 justify-items-start '>
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

            <div className='w-1/4 p-1  border-solid border-azure-200  justify-items-center '>
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
       </div> 
      </>

      )

}


      export default NextMatch;