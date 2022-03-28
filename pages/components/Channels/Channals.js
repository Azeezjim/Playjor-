import React from 'react'

function Channels() {
  return (
    <div>
      <div className="border border-gray-300 w-44 h-48 rounded-lg shadow-md  ">
        <h1 className="text-sm font-semibold m-2"> Channels you may like !</h1>
        <div className="flex justify-around mx-3">
          <button className="px-1 py-0.5 font-semibold  bg-red-600 text-xs text-white rounded">POPULER</button>
          <button className="px-1 py-0.5 font-semibold  bg-white text-xs rounded border border-gray-300">NEWEST</button>
          <button className="px-1 py-0.5 font-semibold  bg-white text-xs rounded border border-gray-300">SEE ALL</button>
        </div>
        <div>
          <div className="flex justify-between">
            <div className="mx-2.5 my-2 space-y-2.5">
              <img src="images/person7.jpg" alt="person7" className="rounded-full border-1 border-red-600 w-6 h-6 " />
              <img src="images/person8.jpg" alt="person8" className="rounded-full border-1 border-red-600 w-6 h-6 " />
              <img src="images/person6.jpg" alt="person9" className="rounded-full border-1 border-red-600 w-6 h-6 " />
              <img src="images/person10.jpg" alt="person10" className="rounded-full border-1 border-red-600 w-6 h-6 " />
            </div>

            <div className="space-y-2.5">
              <div>
                <p className="flex justify-center mt-2 font-semibold items-center text-xs text-centwe font-semi-bold ">Graphic Design</p>
                <p className="flex justify-center mt-0.5 font-medium items-center text-gray-500 text-xs text-centwe font-semi-bold ">145k Following</p>
              </div>
              <div>
                <p className="flex justify-center mt-2 font-semibold items-center text-xs text-centwe font-semi-bold ">Mountain Riders</p>
                <p className="flex justify-center mt-0.5 font-medium items-center text-gray-500 text-xs text-centwe font-semi-bold ">452k Following</p>
              </div>
              <div>
                <p className="flex justify-center mt-2 font-semibold items-center text-xs text-centwe font-semi-bold ">Coffee Addicts</p>
                <p className="flex justify-center mt-0.5 font-medium items-center text-gray-500 text-xs text-centwe font-semi-bold ">845k Following</p>
              </div>
              <div>
                <p className="flex justify-center mt-2 font-semibold items-center text-xs text-centwe font-semi-bold ">Architecturen</p>
                <p className="flex justify-center mt-0.5 font-medium items-center text-gray-500 text-xs text-centwe font-semi-bold ">237k Following</p>
              </div>
          </div>

          <div className="flex flex-col m-2 space-y-4 mt-3.5">
            <button className="px-1 py-0.5 mx-2 bg-red-600 font-semibold text-xs text-white rounded">Subscribe</button>
            <button className="px-1 py-0.5 mx-2 bg-red-600 font-semibold text-xs text-white rounded">Subscribe</button>
            <button className="px-1 py-0.5 mx-2 bg-red-600 font-semibold text-xs text-white rounded">Subscribe</button>
            <button className="px-1 py-0.5 mx-2 bg-red-600 font-semibold text-xs text-white rounded">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Channels
