import React, { useState, useEffect } from 'react';
import './style/Projects.css';
import { projectsData } from './Data';
import { projectsNav } from './Data';
import Card from './Card';

const Portfolio = () => {
  const [item, setItem] = useState({name: 'all'});
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === 'all') {
      setProjects(projectsData)
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category === item.name;
      })

      setProjects(newProjects)
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({name: e.target.textContent});
    setActive(index)
  };

  function oddOrEven(n) {
    if (n !== 1) {
      return n % 2 === 0 ? 2 : 3
    } else {
      return 1
    }
  }

  return (
    <section className="portfolio section" id='portfolio'>
      <h2 className="title">Portfolio</h2>
      <span className='subtitle'>My projects</span>

      <div>
        <div className="project__filters">
          {projectsNav.map((item, index) => {
            return (
              <span onClick={(e) => {
                handleClick(e, index)
              }} className={active === index ? 'active__project' : 'project__item'} key={index}>{item.name}</span>
            )
          })}
        </div>

        <div className="projects__container container" style={
          {'grid-template-columns': `repeat(${oddOrEven(projects.length)}, max-content)`,}
        } >
          {projects.map((item) => {
            return <Card item={item} key={item.id} href={item.link} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Portfolio