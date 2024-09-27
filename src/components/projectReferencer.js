export default function ProjectReferencer() {
  return (
    <div className="grid gap-2 aparecer">
      <span className="font-bold">List of repositories:</span>
      <ul className="list-disc pl grid gap-2">
        <li><a className="hover:text-green-500" href="https://github.com/Calana2/portfolio" alt="portfolio">Portfolio</a></li>
        <li><a className="hover:text-green-500" href="https://github.com/Calana2/Blog" alt="blog">Blog</a></li>
        <li><a className="hover:text-green-500" href="https://github.com/Calana2/URL_shortener" alt="portfolio">URL Shortener</a></li>
        <li><a className="hover:text-green-500" href="https://github.com/Calana2/cleverchat" alt="portfolio">Chat App</a></li>
      </ul>
    </div>
  )
}

