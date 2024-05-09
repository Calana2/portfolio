import { useEffect, useState } from "react";
import "./principalText.css"

export default function PrincipalText(){
const [animationClass,setAnimationClass] = useState("");

/* Animacion */
useEffect(()=>{
 const IntervalId = setInterval(()=>{
  setAnimationClass("principalText"); 
   setTimeout(()=>{
    setAnimationClass("");
   },400);
 },5000);
 return () => clearInterval(IntervalId);
},[]);

return(
  <div className={`${animationClass} md:text-4xl text-2xl md:w-1/3 md:h-1/3 h-1/6 w-full md:p-4 p-6
    bg-black absolute flex items-center justify-center font-serif text-white border-2 border-purple-500`}
           style={{
            boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",
           }}
          >
            Hello, I am Kevin,<br/>
            You are welcome.<br/>
          </div>
 );
}
