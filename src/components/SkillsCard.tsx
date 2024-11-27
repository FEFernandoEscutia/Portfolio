import { Skill } from "../interfaces/index";
export const SkillsCard = ({icon, title, text }:Skill) => {
  return (
    <article>
       <span>{icon}</span> 
       <h4 className="mt-6 font-bold font-mono">{title}</h4>
       <p className="mt-2 text-slate-500 font-bold">{text}</p>
    </article>
  )
}
