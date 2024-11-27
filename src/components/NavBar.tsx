import { links } from "../helpers/data";
import { Link } from "../interfaces/links.interface";

export const NavBar = () => {
  return (
    <nav className="bg-emerald-100">
      <div className="mx-auto max-w-7xl px-8 py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <h2 className="text-3xl font-bold">
          FER<span className="text-emerald-600">Portfolio</span>
        </h2>
        <div className="flex gap-x-3">
          {links.map((link: Link) => {
            const { id, href, text } = link;
            return (
              <a key={id} href={href} className="capitalize text-lg tracking-wider hover:text-emerald-600 duration-300">
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};