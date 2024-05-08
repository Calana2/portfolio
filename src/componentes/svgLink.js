export default function SvgLink({src, alt, link}){

 return(
  <a href={link}>
   <img src={src} alt={alt}/>
  </a>
 );

}
