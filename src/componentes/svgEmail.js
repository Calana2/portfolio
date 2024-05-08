import { useState } from "react";
import './modal.css'

export default function SvgEmail({ src, alt, email }){
 const [modal,setModal] = useState(false);

  const handleCopyEmail = () => {
   if(navigator.clipboard){
    navigator.clipboard.writeText(email)
      .then(() => {
        setModal(true);
        setTimeout(()=>{setModal(false)},3000);
      })
      .catch((error) => {
        console.error('Error al copiar la dirección de correo:', error);
      });
   } else {
     // TODO
     // Al final va a estar por HTTPS
   }
  };

  return (
    <div>
      <span style={{ cursor: 'pointer' }} onClick={handleCopyEmail}>
        <img src={src} alt={alt} />
      </span>

    {modal && 
      <div className="modal fixed bottom-0 left-0 w-full text-center p-2 text-2xl z-50"
      style={{
              background: "linear-gradient(90deg, rgba(26,0,36,1) 0%, rgba(66,4,134,1) 55%)",
             }}
      >
       Text copied to clipboard successfully
      </div>
    }
    </div>
  );
};

