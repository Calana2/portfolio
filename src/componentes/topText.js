import { useState } from "react";

export default function TopText({text}){
 const [isOpen, setIsOpen] = useState(false);

 const changeFun = () => {
  setIsOpen(!isOpen);
 }

  return(
      <div className="h-full w-1/4 text-white flex justify-center items-center gap-2 hover:cursor-pointer" onClick={changeFun}>
        <p className="font-light md:text-lg text-sm">{text}</p>
        <img src={isOpen ? '../up.png' : '../down.png'} alt="_" onClick={changeFun}/> 
      </div>
  );
}
