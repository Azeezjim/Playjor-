import React from 'react'

export default function Comment() {
  return (
    <div className="border border-gray-300 w-96 h-72 rounded-lg shadow-lg space-y-1 ">
      <div className='ml-2'>
        <p className="text-red-500 text-xs font-semibold ">Hide comment</p>
      </div>

      <div className='flex space-x-2 mx-2 '>
        <img src="images/person1.webp" alt="person1" className="rounded-full w-5 h-5 " />
        <p className='text-sm'> <span className="text-xs font-bold">@devAzeezjim</span> &nbsp; Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, assumenda quos! Natus quam exercitationem explicabo? </p>
      </div>
    </div>
  )
}
