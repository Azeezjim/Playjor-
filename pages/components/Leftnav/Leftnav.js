import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import {MdOutlineExplore, MdGroups} from 'react-icons/md';
import { RiLiveFill  } from 'react-icons/ri'
import { BsDisplay, BsCollectionPlayFill } from 'react-icons/bs'

function Rightnav() {
  return (
    <div>
      <div className="">
        <ul className="space-y-3 p-3 mx-2 my-1.5 ">
          <li className='flex flex-row space-x-2 '> <span className="icon-style"><AiFillHome size={12} color="white" /></span> <p className="text-sm font-bold mt-1.5 ">News Feed</p></li>
          <li className='flex flex-row space-x-2 ' > <span className="icon-style"><MdOutlineExplore size={12} color="white" /></span><p className="text-sm font-bold mt-1.5  ">Explore</p></li>
          <li className='flex flex-row space-x-2 ' > <span className="icon-style"><RiLiveFill size={12} color="white" /></span><p className="text-sm font-bold mt-1.5  ">Live</p></li>
          <li className='flex flex-row space-x-2 ' > <span className="icon-style"><BsDisplay size={12} color="white" /></span><p className="text-sm font-bold mt-1.5  ">Channels</p> </li>
          <li className='flex flex-row space-x-2 ' > <span className="icon-style"><MdGroups size={12} color="white" /></span><p className="text-sm font-bold mt-1.5  ">Group</p> </li>
          <li className='flex flex-row space-x-2 ' > <span className="icon-style"><BsCollectionPlayFill size={12} color="white" /></span><p className="text-sm font-bold mt-1.5  ">Playhub</p></li>
        </ul>
      </div>
    </div>
  )
}

export default Rightnav;
