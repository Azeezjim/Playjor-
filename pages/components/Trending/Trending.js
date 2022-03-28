/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function Trending() {
  return (
    <div className="border border-gray-300 w-44 h-24 rounded-lg shadow-md  ">
      <h1 className="text-xs font-semibold m-2"> Trending!</h1>
      <div className="flex flex-col text-xs m-2 ">
        <a href="#" className="text-blue-900 font-semibold underline-offset-8">#gerthytr</a>
        <a href="#" className="text-blue-900 font-semibold underline-offset-8">#to</a>
        <a href="#" className="text-blue-900 font-semibold underline-offset-8">#hungry</a>
        <a href="#" className="text-blue-900 font-semibold underline-offset-8">#tested</a>
        <a href="#" className="text-blue-900 font-semibold underline-offset-8">#urugury</a>
      </div>
    </div>
  )
}

export default Trending;
