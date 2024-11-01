/**
 * @Copyright 2024 AhmedAshraf
 * @license Apache-2.0
 */

/**
 * Components
 */
import ProjectCard from "./ProjectCard";

const works = [
    {
      imgSrc: '/images/project-1.png',
      title: 'Mern stack Shop Cart',
      tags: ['eCommerce', 'Sass', 'Firebase'],
      projectLink: 'https://thunderous-marzipan-1aa8c2.netlify.app'
    },
    {
      imgSrc: '/images/project-2.png',
      title: 'Admin Dashboard',
      tags: ['Charts', 'DataVisualize'],
      projectLink: 'https://admin-dashboard-vitereact.netlify.app'
    },
    {
      imgSrc: '/images/project-3.png',
      title: 'Game Shop Website',
      tags: ['Dashboard', 'API'],
      projectLink: 'https://game-shop-reactjs.netlify.app'
    },
    {
      imgSrc: '/images/project-4.png',
      title: 'Positivus',
      tags: ['Landing Page', 'Figma', 'UI/UX'],
      projectLink: 'https://positivus-marketing-agency-react.netlify.app'
    },
    {
      imgSrc: '/images/project-5.png',
      title: 'Movie Land',
      tags: ['Live API'],
      projectLink: 'https://incandescent-churros-e38f64.netlify.app'
    },
    {
      imgSrc: '/images/project-6.png',
      title: 'Plumber Website',
      tags: ['Web-design', 'UI/UX'],
      projectLink: 'https://relaxed-kulfi-b1948b.netlify.app'
    },
  ];

const Work = () => {
  return (
    <section className="section" id="work">
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>

            <div className="grid gap-x-4 gap-y-4 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({imgSrc, title, tags, projectLink}, key)=>(
                    <ProjectCard key={key} imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink} classes="reveal-up"/>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Work