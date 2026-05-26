import React from 'react';
import glowingsoftLogo from '../../../assets/icons/glowingsoft.jpg';
import solutioninnLogo from '../../../assets/icons/solutioninn.jpg';
import techlogixLogo from '../../../assets/icons/techlogix.jpg';
import vicennaLogo from '../../../assets/icons/vicenna.jpg';

const experienceGroups = [
  {
    company: 'Techlogix',
    logo: techlogixLogo,
    status: 'Current workplace',
    roles: [
      {
        title: 'Software Engineer',
        team: 'Techlogix',
        type: 'Full-time',
        period: 'Apr 2026 - Present',
        duration: '2 mos',
        location: 'Lahore, Punjab, Pakistan',
        mode: 'On-site',
        logo: techlogixLogo,
        summary:
          'Working on scalable engineering solutions with a focus on practical system design, clean implementation, and reliable delivery in a professional software environment.',
        skills: ['Distributed Systems', 'Microservices Architecture', 'System Design', 'Software Engineering'],
      },
      {
        title: 'Software Engineer',
        team: 'Vicenna - A Techlogix Company',
        type: 'Full-time',
        period: 'Apr 2026',
        duration: '1 mo',
        location: 'Lahore, Punjab, Pakistan',
        mode: 'On-site',
        logo: vicennaLogo,
        summary:
          'Contributed to product engineering work using AngularJS and ASP.NET Core while collaborating in an on-site team environment.',
        skills: ['AngularJS', 'ASP.NET Core', 'Distributed Systems', 'Microservices Architecture'],
      },
    ],
  },
  {
    company: 'Glowingsoft Technologies',
    logo: glowingsoftLogo,
    status: 'Previous role',
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
        summary:
          'Worked on SaaS projects across the Node.js backend and React Native mobile apps, delivering smooth Android and iOS experiences. Built and tested REST APIs using Postman collections and integrated Python libraries where needed. Collaborated with clients through demos and feedback sessions while ensuring reliable service delivery.',
        skills: ['React.js', 'React Native', 'Node.js', 'MERN Stack', 'Python (Django, Flask, FastAPI)', 'Postman API'],
      },
    ],
  },
  {
    company: 'SolutionInn',
    logo: solutioninnLogo,
    status: 'Trainee role',
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
        summary:
          'Developed a product solution to manage subscription-based plan limits for users and students, handling usage controls for AI chatbot interactions, textbook solution access, and expert assistance requests. Implemented logic to track, enforce, and reset limits based on user plans, ensuring scalability and efficient resource allocation across different subscription tiers.',
        skills: ['PHP', 'MySQL', 'Amazon Web Services (AWS)', 'HTML5', 'Cascading Style Sheets (CSS)'],
      },
    ],
  },
];

export function ExperienceSection() {
  return (
    <section className="experience-section" id="experience" aria-labelledby="experience-title">
      <div className="experience-heading">
        <p className="section-kicker">Experience</p>
        <h2 id="experience-title">A practical path through product engineering.</h2>
      </div>

      <div className="experience-timeline">
        {experienceGroups.map((group) => (
          <article className="experience-group" key={group.company}>
            <div className="timeline-marker" aria-hidden="true">
              <span />
            </div>

            <div className="group-card">
              <header className="group-header">
                <div className="company-media">
                  <img src={group.logo} alt={`${group.company} logo`} />
                </div>
                <div>
                  <p className="group-status">{group.status}</p>
                  <h3>{group.company}</h3>
                </div>
              </header>

              <div className="role-list">
                {group.roles.map((role) => (
                  <section className="role-card" key={`${role.team}-${role.period}`}>
                    <div className="role-logo">
                      <img src={role.logo} alt={`${role.team} logo`} />
                    </div>

                    <div className="experience-body">
                      <h4>{role.title}</h4>
                      <p className="company-line">
                        {role.team} <span>·</span> {role.type}
                      </p>
                      <p className="meta-line">
                        {role.period} <span>·</span> {role.duration}
                      </p>
                      <p className="meta-line">
                        {role.location} <span>·</span> {role.mode}
                      </p>
                      <p className="experience-summary">{role.summary}</p>
                      <ul className="skills-list" aria-label={`Skills for ${role.title} at ${role.team}`}>
                        {role.skills.map((skill) => (
                          <li key={skill}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
