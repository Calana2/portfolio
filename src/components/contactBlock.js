import SvgEmail from "./svgEmail";
import SvgLink from "./svgLink";

export default function ContactBlock(){
 return(
  <div className="text-3xl font-bold flex items-center gap-2 font-serif italic"
  >
   <p className="text-white">Contact me:</p>
   <SvgLink src='/linkedin.svg' alt="linkedin" link="www.linkedin.com/in/kevin-calaña-castellón-998a9a32b"/>
   <SvgLink src='/github.svg' alt="github" link="https://github.com/Calana2"/>
   <SvgEmail  src='/protonmail.svg' alt="protonmail" email="kalcast00@proton.me"/>
  </div>
 );
}
