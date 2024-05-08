import './App.css';
import ContactBlock from './componentes/contactBlock';

function App() {
  return (

<div className="App"
 style={{background: "linear-gradient(90deg, rgba(26,0,36,1) 0%, rgba(49,9,121,1) 61%, rgba(104,0,255,1) 100%)"}}
>

    {/* VISIBLE EN PANTALLA */}
    <div className="h-screen w-screen flex flex-col"
    >

     {/* SECCION 1 - HEADER*/}
     <header className="flex-grow"
          style={{flexGrow:"0.08",
                  "@media:(min-width:768px)":"flexGrow:0.10",
                 }}
     >
     </header>


     {/* SECCION 2 */}
     <div className="flex flex-col md:flex-row"
          style={{flexGrow:"0.92",
                  "@media:(min-width:768px)":"flexGrow:0.90",
          }}
     >
       {/* LEFT NAVBAR DIV*/}
       <navbar className=""
            style={{flexGrow:"0.07",
                    "@media:(min-width:768px)":"flexGrow:0.90",
                  }}      
       >
       </navbar>
       {/* MAIN CONTENT DIV*/}
       <section className=""
            style={{flexGrow:"0.93",
                    "@media:(min-width:768px)":"flexGrow:0.90",
                  }}      
       >
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
      <span className="font-serif italic font-semibold">Protoncala@proton.me</span>
    </footer>
</div>
  );
}

export default App;
