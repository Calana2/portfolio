export default function CVDownloader(){
 return(
  <div className="flex md:flex-col gap-2 justify-center items-center md:mt-36">
   <div className="text-white bg-black p-2 text-sm border-2 border-purple-500">Download CV</div> 
   <a href="../../resumeEN.pdf" download>
    <img src="../../download.png" alt="_"/>
   </a>
  </div>
 );
}
