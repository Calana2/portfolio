import './App.css';
import ContactBlock from './componentes/contactBlock';
import CVDownloader from './componentes/cvDownloader';
import PrincipalText from './componentes/principalText';
import RoundedImg from './componentes/roundedImg';
import SvgLink from './componentes/svgLink';
import TopText from './componentes/topText';

/*  MODELO FLEXBOX 
  *  HEADER
  *
  *   PROJECTS
  *   ASSOCIATED
  *   ABOUT ME
  *  MAIN
  *   LEFT NAV
  *   SECTION (HERO)
  *    LEFT SECTION
  *     RELLENO
  *     FOTO
  *     TECNOLOGIAS
  *     RELLENO
  *    RIGHT SECTION
  *     RELLENO
  *      TEXTO
  *     RELLENO
  *  FOOTER (CONTACT)
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
     <header className="flex-grow flex"
          style={{flexGrow:"0.08",
                  "@media:(minWidth:768px)":"flexGrow:0.10",
                 }}
     >
      <TopText text="Blog" />
      <TopText text="Projects" />
      <TopText text="Associated" />
      <TopText text="About Me" />
     </header>


     {/* SECCION 2 */}
     <div className="flex flex-col md:flex-row"
          style={{flexGrow:"0.92",
                  "@media:(minWidth:768px)":"flexGrow:0.90",
          }}
     >
       {/* LEFT NAV DIV*/}
       <nav className="flex justify-center items-center"
            style={{flexGrow:"0.07",
                    "@media:(minWidth:768px)":"flexGrow:0.90",
                  }}      
       >
     { window.innerWidth <= 768 && <CVDownloader/> }
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
    {/* absolute */}
           <div className="flex gap-2">
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
         <div className="flex justify-center items-top md:p-5"
             style={{flexGrow:"0.80",
                     "@media:(minWidth:768px)":"flexGrow:0.80",
                   }}      
         > 
          <PrincipalText/>
          { window.innerWidth > 768 && <CVDownloader/> }
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
       
