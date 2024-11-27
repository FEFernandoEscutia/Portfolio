import { skills } from "../helpers/data";
import { Skill, } from "../interfaces";
import{SectionTitle,SkillsCard }from"./index"

export const Skills = () => {
  return (
    <section className="py-20 align-element" id="skills">
      <SectionTitle text="Tech Stack"/>
      <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill: Skill) => {
          const { id } = skill;
          return <SkillsCard key={id} {...skill} />;
        })}
      </div>
    </section>
  );
};
