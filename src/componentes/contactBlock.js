import SvgEmail from "./svgEmail";
import SvgLink from "./svgLink";

export default function ContactBlock(){
 return(
  <div className="text-3xl font-bold flex items-center gap-2 font-serif italic"
  >
   <p className="text-white">Contact me:</p>
   <SvgLink src='/linkedin.svg' alt="linkedin" link="https://cu.linkedin.com/in/kevin-cala%C3%B1a-52647a294"/>
   <SvgLink src='/github.svg' alt="github" link="https://github.com/Calana2"/>
   <SvgEmail  src='/protonmail.svg' alt="protonmail" email="kalcast00@proton.me"/>
  </div>
 );
}
