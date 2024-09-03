export default function SvgLink({src, alt, link}){
 return(
  <a className='hover:translateY14' href={link}>
   <img src={src} alt={alt}/>
  </a>
 );
}
