import { useEffect, useState } from "react";
import './topText.css'

export default function TopText({text,children}){
 const [isOpen, setIsOpen] = useState(false);
 const [isFR, setIsFR] = useState(true); // first render

 const changeFun = () => {
   setIsOpen(!isOpen);
   if(isFR)
    setIsFR(false);
 }

 useEffect(()=>{

 },[]);

  return(
      <div className="h-full w-1/4 text-white flex justify-center items-center gap-2 hover:cursor-pointer">
        <p className="font-light md:text-lg text-sm" onClick={changeFun}>{text}</p>
        <img src={isOpen ? '../up.png' : '../down.png'} alt="_" onClick={changeFun}/> 
        <div className={`cursor-auto flex justify-center items-center ${isOpen ? "desplegar" : isFR ? "hidden replegar" : "replegar"}`}>
         {isOpen && children}
        </div> 
      </div>
  );
}
