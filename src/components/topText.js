import { useContext, useState } from "react";
import './topText.css'
import { deployContext } from './topParent'



export default function TopText({text,children}){
 const {deployments, setDeployments} = useContext(deployContext);
 const [isFR, setIsFR] = useState(true); // first render

 const changeFun = () => {
   setDeployments(previous=>{
    const newDeployments = {...previous,[text]:!deployments[text]};
    
    Object.keys(newDeployments).forEach(key=>{
     if(key !== text){
      newDeployments[key]=false;
     }
    });

    return newDeployments;
   });

   if(isFR)
    setIsFR(false);
}


  return(
      <div className="h-full w-1/4 text-white flex justify-center items-center gap-2 hover:cursor-pointer">
        <p className="font-light md:text-lg text-sm" onClick={changeFun}>{text}</p>
        <img src={deployments[text] ? 'up.png' : 'down.png'} alt="_" onClick={changeFun}/> 
        <div className={`cursor-auto flex justify-center items-center ${deployments[text] ? "desplegar" : isFR ? "hidden replegar" : "replegar"}`}>
         {deployments[text] && children}
        </div> 
      </div>
  );
}
