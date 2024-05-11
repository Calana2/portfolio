import { useState } from "react";

export default function CVDownloader(){
const [downloaded,setDownloaded] = useState(false);

 return(
  <div className="flex md:flex-col gap-2 justify-center items-center md:mt-36">
   <div className="text-white bg-black p-2 text-sm border-2 border-purple-500">
    {!downloaded ? "Download CV" : "Downloaded"}
   </div> 
   <a href="../../resumeEN.pdf" download onClick={()=>{if(!downloaded)setDownloaded(true);}}>
    <img src="../../download.png" alt="_"/>
   </a>
  </div>
 );
}
