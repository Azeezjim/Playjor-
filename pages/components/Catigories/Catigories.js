import React from "react";

export default function Catigories() {
  return (
    <div>
      <div className="border border-gray-300 w-96 h-28 rounded-lg shadow-lg space-y-1 ">
        <div className=" mx-2 flex flex-col my-auto">
          <p className=" text-sm font-medium mr-2 pr-2">Catigories</p>
          <p className=" text-xs ">Find creators by browsing top catigories</p>
        </div>
        <div className="container flex flex-col space-0.5 mb-0.5">
          <div className="flex justify-around  my-0.5">
            <li className="list-none   rounded border border-gray-200 shadow-md items-center ">
              {" "}
              <img
                src="images/person3.jpg"
                alt="person1"
                className="rounded w-28 h-12"
              />{" "}
              <p className="flex justify-start text-red-500  ml-2 m-auto text-xs  font-medium ">
                Health
              </p>{" "}
              <p className="flex justify-start text-gray-800  ml-2 m-auto text-xsm pb-1.5 ">
                More on Health
              </p>
            </li>
            <li className="list-none   rounded border border-gray-200 shadow-md items-center  ">
              {" "}
              <img
                src="images/person1.webp"
                alt="person2"
                className="rounded w-28 h-12"
              />
              <p className="flex justify-start text-red-500  ml-2 m-auto text-xs  font-medium ">
                Food and Nutrition
              </p>
              <p className="flex justify-start text-gray-800  ml-2 m-auto text-xsm pb-1.5 ">
                More on food and nutrition
              </p>
            </li>
            <li className="list-none   rounded border border-gray-200 shadow-md items-center  ">
              {" "}
              <img
                src="images/person2.jpg"
                alt="person3"
                className="rounded w-28 h-12"
              />
              <p className="flex justify-start text-red-500  ml-2 m-auto text-xs  font-medium ">
                Fashion
              </p>
              <p className="flex justify-start text-gray-800  ml-2 m-auto text-xsm pb-1.5 ">
                More on fashion
              </p>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}
