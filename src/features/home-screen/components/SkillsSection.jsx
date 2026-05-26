import React, { useMemo, useState } from 'react';
import angularIcon from '../../../assets/icons/skill-angular.svg';
import cssIcon from '../../../assets/icons/skill-css.svg';
import dotnetIcon from '../../../assets/icons/skill-dotnet.svg';
import expressIcon from '../../../assets/icons/skill-express.svg';
import fastApiIcon from '../../../assets/icons/skill-fastapi.svg';
import flaskIcon from '../../../assets/icons/skill-flask.svg';
import gitIcon from '../../../assets/icons/skill-git.svg';
import githubIcon from '../../../assets/icons/github.svg';
import htmlIcon from '../../../assets/icons/skill-html.svg';
import javascriptIcon from '../../../assets/icons/skill-javascript.svg';
import knockoutIcon from '../../../assets/icons/skill-knockout.svg';
import mongoIcon from '../../../assets/icons/skill-mongodb.svg';
import mysqlIcon from '../../../assets/icons/skill-mysql.svg';
import nodeIcon from '../../../assets/icons/skill-node.svg';
import obdxIcon from '../../../assets/icons/skill-obdx.svg';
import oracleIcon from '../../../assets/icons/skill-oracle.svg';
import pythonIcon from '../../../assets/icons/skill-python.svg';
import reactIcon from '../../../assets/icons/skill-react.svg';
import requireIcon from '../../../assets/icons/skill-require.svg';
import systemIcon from '../../../assets/icons/skill-system.svg';

const filters = ['All Skills', 'Frontend', 'Backend', 'Database', 'Version Control'];

const skills = [
  { name: 'React.js', icon: reactIcon, category: 'Frontend' },
  { name: 'React Native', icon: reactIcon, category: 'Frontend' },
  { name: 'Angular', icon: angularIcon, category: 'Frontend' },
  { name: 'KnockoutJS', icon: knockoutIcon, category: 'Frontend' },
  { name: 'RequireJS', icon: requireIcon, category: 'Frontend' },
  { name: 'HTML5', icon: htmlIcon, category: 'Frontend' },
  { name: 'CSS3', icon: cssIcon, category: 'Frontend' },
  { name: 'JavaScript', icon: javascriptIcon, category: 'Frontend' },
  { name: 'Node.js', icon: nodeIcon, category: 'Backend' },
  { name: 'Express.js', icon: expressIcon, category: 'Backend' },
  { name: 'Python', icon: pythonIcon, category: 'Backend' },
  { name: 'Flask', icon: flaskIcon, category: 'Backend' },
  { name: 'FastAPI', icon: fastApiIcon, category: 'Backend' },
  { name: '.NET Core', icon: dotnetIcon, category: 'Backend' },
  { name: 'Oracle JET', icon: oracleIcon, category: 'Backend' },
  //{ name: 'OBDX', icon: obdxIcon, category: 'Backend' },
  { name: 'MongoDB', icon: mongoIcon, category: 'Database' },
  { name: 'MySQL', icon: mysqlIcon, category: 'Database' },
  { name: 'Oracle DB', icon: oracleIcon, category: 'Database' },
  { name: 'Git', icon: gitIcon, category: 'Version Control' },
  { name: 'GitHub', icon: githubIcon, category: 'Version Control' },
];

const capabilityRings = [
  { label: 'Web Development', value: 92 },
  { label: 'Mobile Development', value: 84 },
  { label: 'AI Development', value: 78 },
  { label: 'Problem Solving', value: 88 },
  { label: 'Version Control', value: 86 },
];

export function SkillsSection() {
  const [activeFilter, setActiveFilter] = useState('All Skills');
  const visibleSkills = useMemo(
    () =>
      activeFilter === 'All Skills'
        ? skills
        : skills.filter((skill) => skill.category === activeFilter),
    [activeFilter],
  );

  return (
    <section className="skills-section" id="skills" aria-labelledby="skills-title">
      <div className="skills-heading">
        <p className="section-kicker">Skills</p>
        <h2 id="skills-title">A focused toolbox for building useful products.</h2>
      </div>

      <div className="skill-filter-bar" aria-label="Skill filters">
        {filters.map((filter) => (
          <button
            className={activeFilter === filter ? 'is-active' : ''}
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="skills-layout">
        <div className="skill-card-grid">
          {visibleSkills.map((skill) => (
            <div className="skill-card" key={`${skill.category}-${skill.name}`}>
              <span className="skill-card-icon">
                <img src={skill.icon} alt="" />
              </span>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>

        <div className="capability-panel" aria-label="Capability levels">
          {capabilityRings.map((item) => (
            <div
              className="capability-ring"
              key={item.label}
              style={{ '--value': item.value }}
            >
              <div className="ring-visual">
                <span>{item.value}%</span>
              </div>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
