import React from 'react';
import { FaRegComment, FaRegBookmark} from 'react-icons/fa'
import {GiSelfLove } from 'react-icons/gi'
import { TiPointOfInterest } from 'react-icons/ti';


function Cardfooter({likes, comments}) {
  return (
    <div className=" pt-2 px-2 py-3 border rounded-b border-gray-300 shadow-md w-96 h-12 ">
      <div className=" flex justify-between item-center mx-4">
        <div className=" flex space-x-2 ">
          <GiSelfLove />
          <p className="mt-1 text-xs font-medium ">{likes}</p> 
        </div>
        <div className=" flex space-x-2 ">
          <FaRegComment />
          <p className="mt-1 text-xs font-medium ">{comments}</p> 
        </div>
        <div className=" flex space-x-2 ">
          <TiPointOfInterest />
          <p className="mt-1 text-xs font-medium ">Tip</p> 
        </div>
        <FaRegBookmark />
      </div>
      <p className="text-xs font-bold text-red-600 mx-4 mt-1">view {comments} coments</p>
    </div>
  )
}

export default Cardfooter
