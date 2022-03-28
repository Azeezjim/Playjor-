import React from 'react'

function Cardbody({body, bodyimage}) {
  return (
    <div className="card flex flex-col border border-gray-300 shadow-md w-96 h-88 ">
      <p className='mt-1 text-sm font-normal py-2 px-3'>{body} <span className='mt-1 text-xs font-bold text-red-600'>Read more...</span></p>
      <img src={bodyimage} alt="2022" className="bg-cover" />
    </div>
  )
}

export default Cardbody
