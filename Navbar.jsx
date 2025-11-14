
import { FaRobot } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import React from 'react'

const Navbar = () => {
  return (
    <div className="nav flex items-center justify-between bg-red-500 h-[120px] px-[150px] p-0 mt-5" >
        <div className="logo flex-items-center-gap[10px]">
<i className="text-[60px] mr-0 mt-10"><FaRobot /></i>
<div><h3 className="font-mono-[700px] text-[40px]" >My<span>BOT</span></h3></div>
</div>
<div className="user">
    <i className="text-[25px] cursor-pointer" ><FaUser /></i>
</div>
    </div>
  )
}

export default Navbar