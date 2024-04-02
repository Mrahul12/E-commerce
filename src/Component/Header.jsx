import React from "react";
import { FaOpencart } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
const Header = (props) => {
  // console.log(props);//Object { handleShow: handleShow(val) }
  // console.log(props.count);
  return (
    
    <>
      <header
        key={Math.random()}
        className="flex justify-around bg-green-500 p-4 w-[100vw] fixed "
      >
        <p key={Math.random()} className="text-2xl font-semibold font-mono cursor-default"
          onClick={()=>props.handleShow(false)}>
          AryaE-Commerce
        </p>
        <a href="https://github.com/Mrahul12" className="font-semibold text-2xl"><BsGithub/></a>
        <p key={Math.random()} className=" font-semibold font-mono cursor-default relative"
        onClick={()=>props.handleShow(true)}>
          <p className=" text-center  absolute left-1 bottom-3 bg-teal-200 px-2 rounded-[50%]">{props.count}</p>
        <b className='text-3xl absolute top-3'> <FaOpencart/></b> 
        </p>
      </header>
    </>
  );
};
export default Header;
