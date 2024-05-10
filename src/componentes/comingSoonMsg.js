import { useEffect, useState } from "react";

export default function ComingSoonMsg(){

 const [colorIdx, setColorIdx] = useState(0);
 const colors = ['text-purple-500','text-purple-700'];

 useEffect(()=>{
  const intervalID = setInterval(()=>{
   setColorIdx((previous)=>(previous+1) % colors.length);
  },300);

  return () => {clearInterval(intervalID);}
 },[colors.length]);

 return(
  <div className="w-1/2 h-1/3 flex justify-center items-center break-all">
   <p className={`text-2xl font-bold underline underline-offset-2 ${colors[colorIdx]}`}>Coming Soon</p>
  </div>
 );
}
