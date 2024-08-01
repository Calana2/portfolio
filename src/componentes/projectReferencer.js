export default function ProjectReferencer() {
  return (
    <div className="grid gap-2">
      <span className="font-bold">My top projects at the moment:</span>
      <ul className="list-disc pl grid gap-2">
        <li><a className="hover:text-green-500" href="https://github.com/Calana2/portfolio" alt="portfolio">This portfolio</a></li>
        <li><a className="hover:text-green-500" href="https://github.com/Calana2/Blog" alt="portfolio">The Blog</a></li>
        <li><a className="hover:text-green-500" href="https://github.com/Calana2/cleverchat" alt="portfolio">Chat App</a></li>
        <li><a className="hover:text-green-500" href="https://github.com/Calana2/Imageboard" alt="portfolio">A ImageBoard</a></li>
      </ul>
    </div>
  )
}

