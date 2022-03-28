import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { GoVerified } from "react-icons/go";
import { BiDotsHorizontalRounded } from "react-icons/bi";

export default function Cardtop({
  personname,
  apersont,
  persondate,
  personimage,
}) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show)
  return (
    <div className="card flex justify-between items-center px-2 border-t border-l border-r border-gray-300  rounded-t-lg shadow-t-lg w-96 h-10">
      <div className="flex flex-row justify-start items-center text-xs mx-2 space-x-2">
        <img
          src={personimage}
          alt="person2"
          className=" w-5 h-5 rounded-full "
        />
        <p className=" text-xs font-medium">{personname}</p>
        <GoVerified className="text-red-500  text-3 space-y-reverse" />
        <p className=" text-gray-500 text-xs">{apersont}</p>
      </div>
      <div className="flex space-x-1 items-center relative">
        <p className=" text-gray-500 text-xs">{persondate}</p>
        <div onClick={handleShow }>
          <BiDotsHorizontalRounded />
        </div>
        {show && (
          <div className=" absolute top-5 right-2">
            <Dropdown />
          </div>
        )}
      </div>
    </div>
  );
}
