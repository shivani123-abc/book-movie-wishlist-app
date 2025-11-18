import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-2 px-4 bg-slate-100 z-30 sm:flex items-center gap-2 border-t border-slate-200 sm:bg-white dark:bg-zinc-950 dark:border-zinc-800">
      <h1 className="flex justify-center items-center gap-2 pb-2 truncate">
        <span>Made by</span>
        <span className="text-xl font-medium tracking-tight truncate transition-colors dark:text-zinc-50">
          @Shivani Yadav
        </span>
      </h1>
      <div className="sm:ml-auto flex items-center justify-center gap-2">
        <Link to="https://github.com/shivani123-abc" target="_blank">
          <Button variant="outline" size="icon">
            <FaGithub className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </Button>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
