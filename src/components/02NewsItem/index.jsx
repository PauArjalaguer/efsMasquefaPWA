import React from 'react'
import transformDate from '../../functions/functions';
import { NavLink } from 'react-router-dom';

const NewsItem = (props) => { 
    return (

        <NavLink style={({ isActive }) => ({
          
        })} to={"/noticies/detall/"+props.data.idNew}> <div key={props.idNew} className='w-full bg-white mb-2 p-2 border border-solid border-gray-400 flex '>
                <div className='w-1/2 p-1'>
                    <img className='w-full rounded-lg ' src={"http://jok.cat/" + props.data.newsImage} />
                </div>
                <div className='w-1/2 p-1 flex flex-col flex-1'>
                    <div className='text-xs font-bold text-right h-3/4 bg-white  justify-end'> {props.data.newsTitle}</div>
                    <div className='text-xs text-right h-1/4 mt-auto pt-2 '>
                        {transformDate(props.data.newsDatetime)}</div>
                </div>
            </div></NavLink>
    )
}

export default NewsItem;