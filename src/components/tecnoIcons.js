import { useState } from 'react'
import SvgLink from './svgLink'

export default function TecnoIcons(){
 const [resize,setResize] = useState(false);

   return(
           <div className="flex gap-2 absolute" 
            onMouseOver={()=>setResize(true)}
            onMouseOut={()=>setResize(false)}>
            <SvgLink src={`${!resize ? '/typescript.svg' : '/typescript64.svg'}`} alt="typescript" link="https://typescriptlang.org"
            /> 
            <SvgLink src={`${!resize ? '/react.svg' : '/react64.svg'}`} alt="react" link="https://react.dev"
            /> 
            <SvgLink src={`${!resize ? '/nextjs.svg' : '/nextjs64.svg'}`} alt="next" link="https://nextjs.org"
            /> 
            <SvgLink src={`${!resize ? '/tailwindcss.svg' : '/tailwindcss64.svg'}`} alt="tailwind" link="https://tailwindcomponents.com"
            /> 
            <SvgLink src={`${!resize ? '/prisma.svg' : '/prisma64.svg'}`} alt="tailwind" link="https://www.prisma.io"
            /> 
           </div>
   );
}
