export default function ProjectDesc() {
 return (
  <div className="w-3/4 h-3/4 p-8 items-center aparecer overflow-scroll
   grid grid-cols-1 gap-20 text-purple-600">

   <div className="flex flex-col gap-3 items-center">
    <h2 className="text-lg font-semibold border-b border-dotted">
     Portfolio
    </h2>
    <img src="/Portfolio.png" alt="blog_img" width={"50%"} height={"50%"}/>
    <p>{"Host: "}
     <a href="https://portfolio-six-nu-43.vercel.app/" className="bg-purple-600 text-white px-1 shadow-purple-600 shadow-md">
      https://portfolio-six-nu-43.vercel.app/
     </a>
    </p>
    <p>Tech stack: React, Create-React-App, TailwindCSS</p>
   </div>


   <div className="flex flex-col gap-3 items-center">
    <h2 className="text-lg font-semibold border-b border-dotted">
     Chat-Application
    </h2>
    <img src="/Chat_Cleverchat.png" alt="chat_img" width={"50%"} height={"50%"}/>
    <p>{"Host: "}
     <a href="https://cleverchat.onrender.com/" className="bg-purple-600 text-white px-1 shadow-purple-600 shadow-md">
      https://cleverchat.onrender.com/
     </a>
    </p>
    <p>Tech stack: NextJs, React, PostgreSQL, Prisma, Socket.io, TailwindCSS, Zod</p>
   </div>

   <div className="flex flex-col gap-3 items-center">
    <h2 className="text-lg font-semibold  border-b border-dotted">
     Simple-Blog
    </h2>
    <img src="/Blog_Minipedia.png" alt="short_img" width={"50%"} height={"50%"}/>
    <p>{"Host: "}
     <a href="https://minipedia-jade.vercel.app/" className="bg-purple-600 text-white px-1 shadow-purple-600 shadow-md">
      https://minipedia-jade.vercel.app/
     </a>
    </p>
    <p>Tech stack: NextJs, React, TailwindCSS, Remark, Gray-Matter</p>
   </div>

   <div className="flex flex-col gap-3 items-center">
    <h2 className="text-lg font-semibold border-b border-dotted">
     Url-Shortener
    </h2>
    <img src="/UrlShortener_Kurl.png" alt="blog_img" width={"50%"} height={"50%"}/>
    <p>{"Host: "}
     <a href="https://url-shortener-jade-two.vercel.app/" className="bg-purple-600 text-white px-1 shadow-purple-600 shadow-md">
      https://url-shortener-jade-two.vercel.app/
     </a>
    </p>
    <p>Tech stack: NextJs, React, PostgreSQL, Prisma, TailwindCSS, Zod</p>
   </div>


  </div>
 )
}
