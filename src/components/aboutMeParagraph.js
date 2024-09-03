import './aboutMeParagraph.css'

export default function AboutMeParagraph(){
 return(
  <div className="md:w-1/2 md:h-1/3 h-1/4 width80P flex justify-center items-center flex-col break-words gap-2 aparecer">
 
  {/* TECNOLOGIAS */}
   <p className='md:text-lg font-normal text-white text-left'>Fullstack web developer, experience with React frameworks such as
   <span className="text-red-500"> NextJs </span>
   and 
   <span className="text-blue-500"> Create-React-App </span>.</p>

  {/* OBJETIVOS */}
   <p className='md:text-lg font-normal text-white text-left'>
    <span className="text-green-500">Open to work </span>
   as a remote developer, I accept freelance assignments. I would also be interested in becoming part of a company.</p>

  {/* IDIOMAS */}
   <p className=' md:text-lg font-normal text-white text-left'>I am a native 
    <span className="text-yellow-500"> Spa</span> 
    <span className="text-orange-500">ni</span>
    <span className="text-red-500">sh </span> 
   speaker, A2 to B1 in 
   <span className="text-red-500"> Eng</span>li
   <span className="text-blue-500">sh</span>
   , with basic knowledge of 
   <span className="text-blue-500"> Ru</span>
   <span className="text-sky-200">si</span>
   <span className="text-red-500">an</span>
   , interested in their culture.</p>
   
  {/* HOBBY */}
   <p className=' md:text-lg font-normal text-white text-left'>I like to read, philosophy and history are subjects that I am passionate about, I practice calisthenics and I have an interest in drawing and graphic design.</p>
   </div>
 ); 
}
