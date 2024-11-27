import AboutImg from "../../../../Projects/Henry/Screenshot 2024-10-04 153734.png" 
import { SectionTitle } from "./SectionTitle";

export const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 lg:grid-cols-3 items-center gap-8">
        <img src={AboutImg} className="w-auto h-80 rounded-full" />
        <article>
          <SectionTitle text="About me:" />
          <p className="font-mono text-slate-600 leading-loose">
            I'm a Full Stack Web Developer specializing in building efficient
            and scalable web applications using JavaScript, TypeScript, React,
            Node.js, and NestJS. My background has equipped me with strong
            problem-solving, leadership, and communication skills that
            complement my technical expertise. Additionally, my bilingual
            proficiency allows me to collaborate effectively with diverse teams
            and clients, ensuring the solutions I create are both functional and
            user-friendly.
          </p>
        </article>
      </div>
    </section>
  );
};
