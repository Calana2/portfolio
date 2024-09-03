export default function ProjectDesc() {
 return (
  <div className="w-3/4 h-3/4 p-8 items-center aparecer overflow-scroll
   grid grid-cols-1 gap-20 text-purple-600">


   <div className="flex flex-col gap-3 items-center">
    <h2 className="text-lg font-semibold border-b border-dotted">
     Chat-Application
    </h2>
    <img src="/Chat_Cleverchat.png" alt="chat_img" width={"50%"} height={"50%"}/>
    <p>{"Host: "}
     <a href="https://cleverchat.onrender.com/" className="bg-gray-200">
      https://cleverchat.onrender.com/
     </a>
    </p>
    <p>Tech stack: NextJs, React, PostgreSQL, Prisma, Zod, Socket.io</p>
   </div>

   <div className="flex flex-col gap-3 items-center">
    <h2 className="text-lg font-semibold  border-b border-dotted">
     Simple-Blog
    </h2>
    <img src="/Blog_Minipedia.png" alt="short_img" width={"50%"} height={"50%"}/>
    <p>{"Host: "}
     <a href="https://minipedia-jade.vercel.app/" className="bg-gray-200">
      https://minipedia-jade.vercel.app/
     </a>
    </p>
    <p>Tech stack: NextJs, React, Remark, Gray-Matter</p>
   </div>

   <div className="flex flex-col gap-3 items-center">
    <h2 className="text-lg font-semibold border-b border-dotted">
     Url-Shortener
    </h2>
    <img src="/UrlShortener_Kurl.png" alt="blog_img" width={"50%"} height={"50%"}/>
    <p>{"Host: "}
     <a href="https://url-shortener-jade-two.vercel.app/" className="bg-gray-200">
      https://url-shortener-jade-two.vercel.app/
     </a>
    </p>
    <p>Tech stack: NextJs, React, PostgreSQL, Prisma, Zod</p>
   </div>

  </div>
 )
}
