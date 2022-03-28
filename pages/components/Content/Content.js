import React from "react";
import { RiVipCrownFill } from "react-icons/ri";

function Content() {
  return (
    <div>
      <div className="border border-gray-300 w-44 h-44 rounded-lg shadow-md">
        <div className=" my-2 mx-2 flex flex-row items-center space-x-2 ">
          <span className="icon-style bg-yellow-500">
            <RiVipCrownFill color="white" size={12} />
          </span>
          <p className=" text-xs font-medium">Top Content Creators</p>
        </div>
        <div className="container flex flex-col space-1.5 item-center mb-0.5">
          <div className="flex justify-around  my-0.5">
            <li className="list-none pb-1 px-0.5  pt-0.5  rounded border border-gray-200 ">
              {" "}
              <img
                src="images/person3.jpg"
                alt="person1"
                className="rounded w-12 h-10"
              />{" "}
              <p className="flex justify-center mt-1 items-center text-xs text-centwe font-semi-bold ">
                Admin
              </p>{" "}
            </li>
            <li className="list-none pb-1 px-0.5  pt-0.5  rounded border border-gray-200 ">
              {" "}
              <img
                src="images/person1.webp"
                alt="person2"
                className="rounded w-12 h-10"
              />
              <p className="flex justify-center mt-1 items-center text-xs text-centwe font-semi-bold ">
                Lord Bird{" "}
              </p>
            </li>
            <li className="list-none pb-1 px-0.5  pt-0.5  rounded border border-gray-200 ">
              {" "}
              <img
                src="images/person2.jpg"
                alt="person3"
                className="rounded w-12 h-10"
              />
              <p className="flex justify-center mt-1 items-center text-xs text-centwe font-semi-bold ">
                Afam Nawp
              </p>{" "}
            </li>
          </div>
          <div className="flex justify-around  my-0.5">
            <li className="list-none pb-1 px-0.5  pt-0.5  rounded border border-gray-200 ">
              {" "}
              <img
                src="images/person4.webp"
                alt="person4"
                className="rounded w-12 h-10"
              />
              <p className="flex justify-center mt-1 items-center text-xs text-centwe font-semi-bold ">
                Joan Jhpn
              </p>{" "}
            </li>
            <li className="list-none pb-1 px-0.5  pt-0.5  rounded border border-gray-200 ">
              {" "}
              <img
                src="images/Person5.jpg"
                alt="person5"
                className="rounded w-12 h-10"
              />
              <p className="flex justify-center mt-1 items-center text-xs text-centwe font-semi-bold ">
                Michel Ali
              </p>{" "}
            </li>
            <li className="list-none pb-1 px-0.5  pt-0.5  rounded border border-gray-200 ">
              {" "}
              <img
                src="images/person6.jpg"
                alt="person6"
                className="rounded w-12 h-10"
              />
              <p className="flex justify-center mt-1 items-center text-xs text-centwe font-semi-bold ">
                Afman
              </p>{" "}
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
