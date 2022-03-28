import React from 'react'

export default function Groups() {
  return (
    <div>
      <div className="border border-gray-300 w-44 h-64 rounded-lg shadow-md  ">
        <div className="flex items-center justify-between flex-row">
          <h1 className="text-xs font-semibold m-2"> Groups you may like !</h1>
          <h1 className="text-xs font-semibold m-2 text-blue-800"> Refresh</h1>
        </div>
        <div className="flex justify-around mx-3">
          <button className="px-1 py-0.5 font-semibold  bg-red-600 text-xs text-white rounded">POPULER</button>
          <button className="px-1 py-0.5 font-semibold  bg-white text-xs rounded border border-gray-300">NEWEST</button>
          <button className="px-1 py-0.5 font-semibold  bg-white text-xs rounded border border-gray-300">SEE ALL</button>
      </div>

      <div className="space-y-2">
        <div className="mt-3">
            <img src="images/Illustration/football.jpg" alt="2022" className="flex m-auto rounded-sm ml-3 w-32 h-10" />
            <div className="flex flex-row justify-between">
              <h1 className="text-xs font-semibold m-0.5 ml-12"> Football</h1>
              <button className="px-2.5 py-0.5 mx-2 my-0.5 mr-9 bg-red-600 font-semibold text-xs text-white rounded">Join</button>
          </div>
        </div>

        <div className="mt-3">
          <img src="images/Illustration/stand up.jpg" alt="2022" className="flex m-auto rounded-sm ml-3 w-32 h-10" />
          <div className="flex flex-row justify-between">
            <h1 className="text-xs font-semibold m-0.5 ml-12"> Comedy</h1>
            <button className="px-2.5 py-0.5 mx-2 my-0.5 mr-9 bg-red-600 font-semibold text-xs text-white rounded">Join</button>
        </div>
      </div>

      <div className="mt-3">
          <img src="images/Illustration/movies.jpg" alt="Movies" className="flex m-auto rounded-sm ml-3 w-32 h-10" />
          <div className="flex flex-row justify-between">
            <h1 className="text-xs font-semibold m-0.5 ml-12"> Movies</h1>
            <button className="px-2.5 py-0.5 mx-2 my-0.5 mr-9 bg-red-600 font-semibold text-xs text-white rounded">Join</button>
        </div>
      </div>
      </div>
    </div>
  </div>
  )
}
