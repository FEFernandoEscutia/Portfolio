import HeroImg from "../assets/Full-stack.webp";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

export const Hero = () => {
  return (
    <div className="bg-emerald-100 py-24">
      <div className="align-element grid md:grid-cols-2 items-center gap-10">
        <article>
          <h1 className="text-7xl font-mono tracking-wider">I'm Fernando</h1>
          <p className="mt-4 text-4xl text-slate-700 capitalize tracking-wide font-mono">
            Full-Stack Web Developer
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide font-mono">
            Turning ideas into interactive reality
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="https://github.com/FEFernandoEscutia">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300"/>
            </a>
            <a href="https://www.linkedin.com/in/fernando-escutia-75901125b/">
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300 "/>
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={HeroImg} className="h-80 lg:h-95 rounded-3xl"/>
        </article>
      </div>
    </div>
  );
};
