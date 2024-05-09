export default function RoundedImg({src, alt}){
 return(
           <div className="h-40 w-40 md:h-60 md:w-60 rounded-full border-2 border-purple-500 flex">
            <img className="h-40 w-40 md:h-60 md:w-60 rounded-full" src={src} alt={alt}/>
           </div> 
 );
}
