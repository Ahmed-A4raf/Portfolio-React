/**
 * @Copyright 2024 AhmedAshraf
 * @license Apache-2.0
 */

/**
 * Components
 */
import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: "/images/figma.svg",
    label: "Figma",
    desc: "Design tool",
  },
  {
    imgSrc: "/images/vite.svg",
    label: "Vite",
    desc: "Build Tool",
  },
  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/images/bootstrap.svg",
    label: "Bootstrap",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/firebase.svg",
    label: "Firebase",
    desc: "Database",
  },
  {
    imgSrc: "/images/sass.svg",
    label: "SASS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/react.svg",
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: "/images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Essential Tools I use</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.</p>
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-3">
            {
                skillItem.map(({imgSrc, label, desc}, key)=>(
                <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} classes="reveal-up"/>
                ))
            }
        </div>
      </div>
    </section>
  );
};

export default Skill;
