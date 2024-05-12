import { useState } from 'react'
import SvgLink from './svgLink'

export default function TecnoIcons(){
 const [resize,setResize] = useState(false);

   return(
           <div className="flex gap-2 absolute" 
            onMouseOver={()=>setResize(true)}
            onMouseOut={()=>setResize(false)}>
            <SvgLink src={`${!resize ? '../../portfolio/typescript.svg' : '../../portfolio/typescript64.svg'}`} alt="typescript" link="https://typescriptlang.org"
            /> 
            <SvgLink src={`${!resize ? '../../portfolio/react.svg' : '../../portfolio/react64.svg'}`} alt="react" link="https://react.dev"
            /> 
            <SvgLink src={`${!resize ? '../../portfolio/nextjs.svg' : '../../portfolio/nextjs64.svg'}`} alt="next" link="https://nextjs.org"
            /> 
            <SvgLink src={`${!resize ? '../../portfolio/tailwindcss.svg' : '../../portfolio/tailwindcss64.svg'}`} alt="tailwind" link="https://tailwindcomponents.com"
            /> 
            <SvgLink src={`${!resize ? '../../portfolio/prisma.svg' : '../../portfolio/prisma64.svg'}`} alt="tailwind" link="https://www.prisma.io"
            /> 
           </div>
   );
}
