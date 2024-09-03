import TopText from "./topText";
import AboutMeParagraph from "./aboutMeParagraph";
//import ComingSoonMsg from "./comingSoonMsg";
import ProjectDesc from "./projectDesc"
import ProjectReferencer from "./projectReferencer"
import AssociatedReferencer from "./associatedReferencer"
import { createContext, useState } from "react";


export const deployContext = createContext(); 

export default function TopParent(){

  const [deployments, setDeployments] = useState({
                                 Blog:false,
                                 Projects:false,
                                 Associated:false,
                                 AboutMe:false,
                                });

 return(
     <div className="w-full h-full flex">
       <deployContext.Provider value={{deployments, setDeployments}}>
        <TopText text="Projects" children=<ProjectDesc/>/>
       </deployContext.Provider>    

       <deployContext.Provider value={{deployments, setDeployments}}>
        <TopText text="Repositories" children=<ProjectReferencer/>/>
       </deployContext.Provider>    

       <deployContext.Provider value={{deployments, setDeployments}}>
        <TopText text="Associated" children=<AssociatedReferencer/>/>
       </deployContext.Provider>    

       <deployContext.Provider value={{deployments, setDeployments}}>
        <TopText text="AboutMe" children=<AboutMeParagraph/>/>
       </deployContext.Provider>    
     </div>
 );
}
