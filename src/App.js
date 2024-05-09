import './App.css';
import ContactBlock from './componentes/contactBlock';
import PrincipalText from './componentes/principalText';
import RoundedImg from './componentes/roundedImg';
import SvgLink from './componentes/svgLink';
import TopText from './componentes/topText';

/*  MODELO FLEXBOX 
  *  HEADER
  *  MAIN
  *   LEFT nav
  *   SECTION
  *    LEFT SECTION
  *     RELLENO
  *     FOTO
  *     TECNOLOGIAS
  *     RELLENO
  *    RIGHT SECTION
  *     RELLENO
  *      TEXTO
  *     RELLENO
  *  FOOTER
  *  */



function App() {
  return (

<div className="App"
 style={{background: "linear-gradient(90deg, rgba(26,0,36,1) 0%, rgba(49,9,121,1) 61%, rgba(104,0,255,1) 100%)"}}
>

    {/* VISIBLE EN PANTALLA */}
    <div className="h-screen w-screen flex flex-col"
    >

     {/* SECCION 1 - HEADER*/}
     <header className="flex-grow flex items-center justify-center"
          style={{flexGrow:"0.08",
                  "@media:(minWidth:768px)":"flexGrow:0.10",
                 }}
     >
     </header>


     {/* SECCION 2 */}
     <div className="flex flex-col md:flex-row"
          style={{flexGrow:"0.92",
                  "@media:(minWidth:768px)":"flexGrow:0.90",
          }}
     >
       {/* LEFT nav DIV*/}
       <nav className=""
            style={{flexGrow:"0.07",
                    "@media:(minWidth:768px)":"flexGrow:0.90",
                  }}      
       >
       </nav>
       {/* MAIN CONTENT DIV*/}
       <section className="flex flex-col md:flex-row"
            style={{flexGrow:"0.93",
                    "@media:(minWidth:768px)":"flexGrow:0.90",
                  }}      
       >
        {/* RESUMEN */}
         {/* PARTE IZQUIERDA */}
         <div className="flex flex-col"
             style={{flexGrow:"0.40",
                     "@media:(minWidth:768px)":"flexGrow:0.40",
                   }}      
         >
          
          {/* RELLENO */}
          <div className="h-1/6 flex"> </div>
          {/* FOTO */}
          <div className="h-1/2 flex items-center justify-center">
           <RoundedImg src="../lain.jpg" alt={"gatos"}/>
          </div>
          {/* TECNOLOGIAS */}
          <div className="h-1/3 flex items-center justify-center">
           <div className="absolute flex gap-2">
            <SvgLink src="../typescript.svg" alt="typescript" link="https://typescriptlang.org"/> 
            <SvgLink src="../react.svg" alt="react" link="https://react.dev"/> 
            <SvgLink src="../nextjs.svg" alt="next" link="https://nextjs.org"/> 
            <SvgLink src="../tailwindcss.svg" alt="tailwind" link="https://tailwindcomponents.com"/> 
           </div>
          </div>
          {/* RELLENO */}
          <div className="h-1/6 flex"></div>
         </div>

         {/* PARTE DERECHA */}
        <div className="flex md:flex-col"
             style={{flexGrow:"0.60",
                     "@media:(minWidth:768px)":"flexGrow:0.60",
                   }}      
        >
         {/* RELLENO */}
         <div className=""
             style={{flexGrow:"0.10",
                     "@media:(minWidth:768px)":"flexGrow:0.10",
                   }}      
         >
        </div>
         {/* CONTENEDOR CUADRO RESUMEN */}
         <div className="flex items-center justify-center"
             style={{flexGrow:"0.80",
                     "@media:(minWidth:768px)":"flexGrow:0.80",
                   }}      
         > 
          <PrincipalText/>
         </div>

         {/* RELLENO */}
         <div className=""
             style={{flexGrow:"0.10",
                     "@media:(minWidth:768px)":"flexGrow:0.10",
                   }}      
         >
         </div>
        </div>
       
       </section>
     </div> 
    </div>


     {/* SECCION 3 - FOOTER*/}
    <footer className="h-40 flex justify-center items-center p-5 flex-col gap-2"
          style={{
                 borderTop:"0.1rem solid white"
                }}
     >
      <ContactBlock/>
      <span className="font-serif italic font-semibold text-white">Protoncala@proton.me</span>
    </footer>
</div>
  );
}

export default App;
       
