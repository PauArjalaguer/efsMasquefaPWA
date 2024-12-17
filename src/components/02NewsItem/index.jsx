import React from 'react'
import {transformDate} from '../../functions/functions';
import { NavLink } from 'react-router-dom';

const NewsItem = (props) => { 
    return (

        <NavLink style={({ isActive }) => ({
        })} to={"/noticies/detall/" + props.data.idNew}>
            {/*   <div key={props.idNew} className='w-full bg-white mb-1 p-2 border border-solid border-azure-700 flex '>
                <div className='w-1/2 p-1'>
                    <img className='w-full rounded-lg ' src={"http://jok.cat/" + props.data.newsImage} />
                </div>
                <div className='w-1/2 p-1 flex flex-col flex-1'>
                    <div className='text-xs md:text-base font-bold text-right h-3/4 bg-white  justify-end text-azure-900'> {props.data.newsTitle}</div>
                    <p className='whitespace-break-spaces h-16'>{props.data.newsContent}</p>
                    <div className='text-xs text-right h-1/4 mt-auto pt-2 text-azure-900 '>
                        {transformDate(props.data.newsDatetime)}
                    </div>
                </div>
            </div> */}
            <div key={props.idNew} className='w-full bg-white mb-1 p-2 border border-solid border-azure-700 flex '>
                <div className="flex w-full">
                    {/* Left Side - Photo */}
                    <div className="w-1/2 pr-4 ">
                        <img
                            src={"http://jok.cat/" + props.data.newsImage}
                            alt={props.data.newsTitle}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>

                    {/* Right Side - Text Content */}
                    <div className="w-1/2 flex flex-col">
                        {/* Title - Single Line with Ellipsis */}
                        <h2 className="text-xs md:text-lg font-bold whitespace-nowrap overflow-hidden text-ellipsis  text-right text-azure-600">
                            {props.data.newsTitle}
                        </h2>

                        {/* Text - Flexible Middle Section with Ellipsis */}
                        <div className="text-xs md:text-base flex-grow overflow-hidden text-ellipsis line-clamp-6 text-azure-600 my-2 whitespace-break-spaces text-justify pt-2">
                            {props.data.newsContent}
                        </div>

                        {/* Date - Fixed at Bottom */}
                        <div className="text-sm text-gray-500">
                            {transformDate(props.data.newsDatetime)}
                        </div>
                    </div>
                </div></div>
        </NavLink>
    )
}

export default NewsItem;