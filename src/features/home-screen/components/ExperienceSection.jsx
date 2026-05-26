import React from 'react';
import briefcaseIcon from '../../../assets/icons/briefcase.svg';
import calendarIcon from '../../../assets/icons/calendar.svg';
import glowingsoftLogo from '../../../assets/icons/glowingsoft.jpg';
import locationIcon from '../../../assets/icons/location.svg';
import angularIcon from '../../../assets/icons/skill-angular.svg';
import awsIcon from '../../../assets/icons/skill-aws.svg';
import cssIcon from '../../../assets/icons/skill-css.svg';
import dotnetIcon from '../../../assets/icons/skill-dotnet.svg';
import htmlIcon from '../../../assets/icons/skill-html.svg';
import mysqlIcon from '../../../assets/icons/skill-mysql.svg';
import nodeIcon from '../../../assets/icons/skill-node.svg';
import javaIcon from '../../../assets/icons/skill-java.svg';
import knockoutIcon from '../../../assets/icons/skill-knockout.svg';
import obdxIcon from '../../../assets/icons/skill-obdx.svg';
import oracleIcon from '../../../assets/icons/skill-oracle.svg';
import phpIcon from '../../../assets/icons/skill-php.svg';
import postmanIcon from '../../../assets/icons/skill-postman.svg';
import pythonIcon from '../../../assets/icons/skill-python.svg';
import requireIcon from '../../../assets/icons/skill-require.svg';
import reactIcon from '../../../assets/icons/skill-react.svg';
import systemIcon from '../../../assets/icons/skill-system.svg';
import solutioninnLogo from '../../../assets/icons/solutioninn.jpg';
import sparkIcon from '../../../assets/icons/spark.svg';
import techlogixLogo from '../../../assets/icons/techlogix.jpg';
import vicennaLogo from '../../../assets/icons/vicenna.jpg';
import fsiLogo from '../../../assets/icons/fsi-obdx.jpg';
import glowingsoftPhoto from '../../../assets/images/experience/glowingsoft.jpg';
import solutioninnPhoto from '../../../assets/images/experience/solutionInn.jpg';
import techlogixPhotoOne from '../../../assets/images/experience/techlogix-1.jpg';
import techlogixPhotoTwo from '../../../assets/images/experience/techlogix-2.jpg';

const skillIcons = {
  'Amazon Web Services (AWS)': awsIcon,
  AngularJS: angularIcon,
  'ASP.NET Core': dotnetIcon,
  'Cascading Style Sheets (CSS)': cssIcon,
  'Distributed Systems': systemIcon,
  HTML5: htmlIcon,
  'MERN Stack': reactIcon,
  'Microservices Architecture': systemIcon,
  MySQL: mysqlIcon,
  'JAVA Core': javaIcon,
  KnockoutJS: knockoutIcon,
  'Node.js': nodeIcon,
  OBDX: obdxIcon,
  'Oracle JET': oracleIcon,
  PHP: phpIcon,
  'Postman API': postmanIcon,
  'Python (Django, Flask, FastAPI)': pythonIcon,
  'React Native': reactIcon,
  'React.js': reactIcon,
  RequireJS: requireIcon,
  'Software Engineering': briefcaseIcon,
  'System Design': systemIcon,
};

const experienceGroups = [
  {
    company: 'Techlogix',
    website: 'https://www.techlogix.com/',
    logo: techlogixLogo,
    status: 'Current workplace',
    timelineNote: 'Currently working at Techlogix',
    imageHint: 'Techlogix workplace image',
    photos: [techlogixPhotoOne],
    roles: [
      {
        title: 'Software Engineer',
        team: 'FSI-OBDX (FinTech)',
        website: 'https://www.techlogix.com/',
        type: 'Full-time',
        period: 'Apr 2026 - Present',
        duration: '2 mos',
        location: 'Lahore, Punjab, Pakistan',
        mode: 'On-site',
        logo: fsiLogo,
        bullets: [
          'Working on scalable engineering solutions with a focus on practical system design.',
          'Building clean implementations for reliable delivery in a professional software environment.',
          'Collaborating inside the FinTech department on maintainable, production-oriented systems.',
        ],
        skills: ['Oracle JET', 'OBDX', 'JAVA Core', 'RequireJS', 'KnockoutJS'],
      },
      {
        title: 'Software Engineer',
        team: 'Vicenna - A Techlogix Company',
        website: 'https://vicenna.com/',
        type: 'Full-time',
        period: 'Apr 2026',
        duration: '1 mo',
        location: 'Lahore, Punjab, Pakistan',
        mode: 'On-site',
        logo: vicennaLogo,
        bullets: [
          'Contributed to product engineering work using AngularJS and ASP.NET Core.',
          'Supported distributed system and microservices-oriented development work.',
          'Collaborated with the on-site team under the Techlogix company environment.',
        ],
        skills: ['AngularJS', 'ASP.NET Core', 'Distributed Systems', 'Microservices Architecture'],
      },
    ],
  },
  {
    company: 'Glowingsoft Technologies',
    website: 'https://www.glowingsoft.com/',
    logo: glowingsoftLogo,
    status: 'Previous role',
    timelineNote: 'Worked Sep 2025 - Apr 2026',
    imageHint: 'Glowingsoft office or team image',
    photos: [glowingsoftPhoto],
    roles: [
      {
        title: 'Associate Software Engineer',
        team: 'Glowingsoft Technologies',
        type: 'Full-time',
        period: 'Sep 2025 - Apr 2026',
        duration: '8 mos',
        location: 'Lahore, Punjab, Pakistan',
        mode: 'On-site',
        logo: glowingsoftLogo,
        bullets: [
          'Worked on SaaS projects across Node.js backend services and React Native mobile apps.',
          'Built and tested REST APIs using Postman collections and integrated Python libraries where needed.',
          'Collaborated with clients through demos and feedback sessions while meeting project milestones.',
        ],
        skills: ['React.js', 'React Native', 'Node.js', 'MERN Stack', 'Python (Django, Flask, FastAPI)', 'Postman API'],
      },
    ],
  },
  {
    company: 'SolutionInn',
    website: 'https://www.solutioninn.com/',
    logo: solutioninnLogo,
    status: 'Trainee role',
    timelineNote: 'Worked Aug 2025 - Sep 2025',
    imageHint: 'SolutionInn office or team image',
    photos: [solutioninnPhoto],
    roles: [
      {
        title: 'Associate Software Engineer Trainee',
        team: 'SolutionInn',
        type: 'Full-time',
        period: 'Aug 2025 - Sep 2025',
        duration: '2 mos',
        location: 'Lahore, Punjab, Pakistan',
        mode: 'On-site',
        logo: solutioninnLogo,
        bullets: [
          'Developed subscription-based plan limit controls for users and students across AI Tutor Help, textbook solutions, and expert solution request modules.',
          'Implemented usage tracking and validation logic to monitor remaining attempts, restrict over-limit access, and reset limits based on subscription tier rules.',
          'Built backend workflows to enforce feature-level access limits, ensuring free, basic, and premium users receive controlled access according to their active plan.',
          'Handled limit management for AI chatbot interactions, textbook solution views, and expert assistance requests with accurate count updates after each user action.',
          'Improved subscription reliability by adding checks for expired plans, exhausted limits, and tier-based permissions before allowing access to premium academic support features.'
        ],
        skills: ['PHP', 'MySQL', 'Amazon Web Services (AWS)', 'HTML5', 'Cascading Style Sheets (CSS)','Javascript', 'GIT'],
      },
    ],
  },
];

export function ExperienceSection() {
  const renderPhotos = (group) => (
    <div className="experience-photo-slot" aria-label={`${group.company} image space`}>
      {group.photos.map((photo, photoIndex) => (
        <img src={photo} alt={`${group.company} workplace ${photoIndex + 1}`} key={photo} />
      ))}
    </div>
  );

  const renderCard = (group) => (
    <div className="group-card">
      <header className="group-header">
        <div className="company-media">
          <img src={group.logo} alt={`${group.company} logo`} />
        </div>
        <div>
          <p className="group-status">{group.status}</p>
          <h3>
            <a href={group.website} target="_blank" rel="noreferrer">
              {group.company}
            </a>
          </h3>
        </div>
      </header>

      <div className={`role-list ${group.roles.length > 1 ? 'is-nested' : ''}`}>
        {group.roles.map((role) => (
          <section
            className={`role-card ${group.roles.length === 1 ? 'is-single-role' : ''}`}
            key={`${role.team}-${role.period}`}
          >
            {group.roles.length > 1 && (
              <div className="role-logo">
                <img src={role.logo} alt={`${role.team} logo`} />
              </div>
            )}

            <div className="experience-body">
              <h4>{role.title}</h4>
              <p className="company-line icon-line role-meta">
                <span className="meta-icon">
                  <img src={briefcaseIcon} alt="" />
                </span>
                {group.roles.length > 1 ? (
                  <>
                    <a href={role.website} target="_blank" rel="noreferrer">
                      {role.team}
                    </a>{' '}
                    <span>&middot;</span> {role.type}
                  </>
                ) : (
                  role.type
                )}
              </p>
              <p className="meta-line icon-line date-meta">
                <span className="meta-icon">
                  <img src={calendarIcon} alt="" />
                </span>
                <span className="date-range">{role.period}</span>
                <span className="duration-pill">{role.duration}</span>
              </p>
              <p className="meta-line icon-line location-meta">
                <span className="meta-icon">
                  <img src={locationIcon} alt="" />
                </span>
                {role.location}
                <span className="work-mode">{role.mode}</span>
              </p>
              <ul className="experience-bullets">
                {role.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <ul className="skills-list" aria-label={`Skills for ${role.title} at ${role.team}`}>
                {role.skills.map((skill) => (
                  <li key={skill}>
                    <img src={skillIcons[skill] ?? sparkIcon} alt="" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
    </div>
  );

  return (
    <section className="experience-section" id="experience" aria-labelledby="experience-title">
      <div className="experience-heading">
        <p className="section-kicker">Experience</p>
        <h2 id="experience-title">A practical path through product engineering.</h2>
      </div>

      <div className="experience-timeline">
        {experienceGroups.map((group, index) => (
          <article
            className={`experience-group ${index % 2 === 0 ? 'is-left' : 'is-right'}`}
            key={group.company}
          >
            <div className={`experience-side left-side ${index % 2 === 0 ? 'is-card' : 'is-media'}`}>
              {index % 2 === 0 ? renderCard(group) : renderPhotos(group)}
            </div>

            <button className="timeline-marker" type="button" data-tooltip={group.timelineNote}>
              <span />
            </button>

            <div className={`experience-side right-side ${index % 2 === 0 ? 'is-media' : 'is-card'}`}>
              {index % 2 === 0 ? renderPhotos(group) : renderCard(group)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
