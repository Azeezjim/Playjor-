import React from 'react';
import { BiCommentAdd, BiMenu } from 'react-icons/bi';
import {AiOutlineSearch} from 'react-icons/ai';
import { RiMessageFill} from 'react-icons/ri';
import { IoIosNotifications } from 'react-icons/io';




export default function Topnav() {
  return (
    <div className="bg-red-600 w-full h-12 text-white">
      <div className='flex flex-row justify-between space-x-42'>
        <div className="flex justify-start items-center ml-5 py-2.5">
          <div className="">
            <BiMenu className="text-white"/>
          </div>

          <div className="px-5 text-bold text-lg font-bold" >
            <h1>Plajor <span className="text-yellow-500">!</span></h1>
          </div>

          <div>
            <div className="bg-red-500 w-72 border-none text-gray-300 border-slate-300 rounded-full py-1.5 pl-4 pr-3 
              shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 
              focus:ring-1 sm:text-sm flex items-center space-x-1.5 ">
              <AiOutlineSearch />
              <input type="text"
                placeholder=" Search for people, Channals, groups and #hashtags"
                className="placeholder:italic placeholder:text-slate-400 placeholder-gray-300 placeholder-transparent bg-red-500"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center mr-6 space-x-3">
            <div className="text-white flex items-center justify-center space-x-2">
                <BiCommentAdd className="p-1 bg-red-500 rounded-full" size={20}/>
                <RiMessageFill className="p-1 bg-red-500 rounded-full" size={20} />
                <IoIosNotifications className="p-1 bg-red-500 rounded-full" size={20} />
            </div>

            <div className="flex items-center space-x-2 py-1 pr-2 bg-red-500 rounded-full">
              <img src="images/person10.jpg" alt="person2" className="rounded-full  w-5 h-5" /> 
              <p className="text-xs font-bold">afam</p>
            </div>
        </div>
      </div>

    </div>
  )
}

