import React, { useMemo, useState } from 'react';
import calendarIcon from '../../../assets/icons/calendar.svg';
import githubIcon from '../../../assets/icons/github.svg';
import linkedinIcon from '../../../assets/icons/linkedin.svg';
import sparkIcon from '../../../assets/icons/spark.svg';
import cssIcon from '../../../assets/icons/skill-css.svg';
import expressIcon from '../../../assets/icons/skill-express.svg';
import flaskIcon from '../../../assets/icons/skill-flask.svg';
import gitIcon from '../../../assets/icons/skill-git.svg';
import htmlIcon from '../../../assets/icons/skill-html.svg';
import javaIcon from '../../../assets/icons/skill-java.svg';
import mongoIcon from '../../../assets/icons/skill-mongodb.svg';
import mysqlIcon from '../../../assets/icons/skill-mysql.svg';
import nodeIcon from '../../../assets/icons/skill-node.svg';
import pythonIcon from '../../../assets/icons/skill-python.svg';
import reactIcon from '../../../assets/icons/skill-react.svg';
import systemIcon from '../../../assets/icons/skill-system.svg';
import fypImage from '../../../assets/images/projects/FYP.jpeg';

const techIcons = {
  Bootstrap: cssIcon,
  CSS: cssIcon,
  'Express.js': expressIcon,
  Flask: flaskIcon,
  GitHub: githubIcon,
  HTML: htmlIcon,
  Java: javaIcon,
  MongoDB: mongoIcon,
  MySQL: mysqlIcon,
  'Node.js': nodeIcon,
  Python: pythonIcon,
  React: reactIcon,
  'React.js': reactIcon,
  'React Native': reactIcon,
};

const filters = ['All Projects', 'AI Development', 'Web Stack', 'Mobile Development', 'Desktop Apps'];

const actionIcons = {
  demo: sparkIcon,
  drive: systemIcon,
  github: githubIcon,
  linkedin: linkedinIcon,
  live: sparkIcon,
};

const featuredProject = {
  name: 'Virtuel Elegance',
  domain: 'Final Year Project',
  date: '2024 - 2025',
  categories: ['AI Development', 'Web Stack', 'Mobile Development'],
  description: [
    'Engineered a mobile and web app using React Native and FERN stack, enabling users to virtually try on outfits based on real-time body data.',
    'Integrated pose estimation through OpenCV and MediaPipe for accurate measurements from live camera input.',
    'Implemented 3D clothing visualization using Unity for a realistic virtual try-on experience.',
  ],
  technologies: [
    'Python',
    'OpenCV',
    'MediaPipe',
    'OpenPose',
    'React.js',
    'React Native',
    'Node.js',
    'Firebase',
    'Flask',
  ],
  actions: [
    { type: 'github', label: 'View GitHub', href: '#projects' },
    {
      type: 'linkedin',
      label: 'LinkedIn Post',
      href: 'https://www.linkedin.com/posts/hannan-fareed_mid-evaluations-successfully-completed-share-7310664539954413569-gMgi/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD0kn0MB9Jn9CJa1us02Vx4e94Ohq14elRk',
    },
  ],
};

const projects = [
  {
    name: 'Well Sphere',
    domain: 'Talent & Recruitment Platform',
    date: 'Mar 2026 - May 2026',
    categories: ['Web Stack'],
    description: [
      'Developed a recruiter-applicant platform connecting businesses and professionals with a centralized admin panel.',
      'Built scalable backend architecture supporting recruiter and candidate workflows with smooth user experience.',
      'Integrated Cloudflare, MongoDB, SendGrid, Stripe, OAuth, WebSockets, and Railway for performance, security, payments, and deployment.',
    ],
    technologies: ['React.js', 'Node.js', 'MongoDB', 'WebSockets', 'Stripe', 'OAuth', 'SendGrid'],
    actions: [
      { type: 'live', label: 'Live Product', href: 'https://app.joinwellsphere.com/sign-in' },
      { type: 'github', label: 'View GitHub', href: 'https://github.com/Hannan-10/Backend-WellSphere' },
    ],
  },
  {
    name: 'TalentRank AI',
    domain: 'Smart Recruitment System',
    date: 'Feb 2026 - Mar 2026',
    categories: ['AI Development', 'Web Stack'],
    description: [
      'Developed an AI-powered recruitment platform where recruiters can post jobs, receive CVs, and automatically rank candidates by relevance.',
      'Built an NLP-based CV screening pipeline using TF-IDF, SVM, Sentence-BERT embeddings, and cosine similarity.',
      'Designed recruiter dashboards for ranked applicants, matching scores, CV details, and job-specific candidate insights.',
    ],
    technologies: ['Node.js', 'React.js', 'NLP', 'TF-IDF', 'SVM', 'Sentence-BERT', 'MongoDB'],
    actions: [
      {
        type: 'drive',
        label: 'Demo Video',
        href: 'https://drive.google.com/file/d/1nRoWOJxhBoZJvmBb-T9RWvX-686tBFF4/view?usp=sharing',
      },
      { type: 'github', label: 'View GitHub', href: 'https://github.com/Hannan-10/Smart-Recruitment-NLP' },
    ],
  },
  {
    name: 'Vital Signs',
    domain: 'AI-Enabled Connected Health Monitoring Application',
    date: 'Jan 2026 - Mar 2026',
    categories: ['AI Development', 'Mobile Development'],
    description: [
      'Integrated doctor appointment workflows for scheduling and consultation management within the health platform.',
      'Implemented health data synchronization from HealthKit and Health Connect with real-time fetching and syncing mechanisms.',
      'Built emergency alert workflows and AI-assisted report generation based on synchronized patient health data.',
    ],
    technologies: ['React Native', 'React.js', 'HealthKit', 'Health Connect', 'Grok', 'Healthcare AI'],
    actions: [
      {
        type: 'drive',
        label: 'Demo Video',
        href: 'https://drive.google.com/file/d/1b2gUTpoJT5aRzfeG2yYtNl9j1JlOBLeh/view',
      },
    ],
  },
  {
    name: 'TechHaveli',
    domain: 'E-commerce Application',
    date: 'Dec 2025 - Jan 2026',
    categories: ['Web Stack'],
    description: [
      'Built a full-stack e-commerce platform using the MERN stack for online electronics and gadget sales.',
      'Implemented authentication, product catalog, shopping cart, payment integration, and order management.',
      'Developed responsive UI with real-time inventory tracking and secure payment processing.',
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux', 'GitHub'],
    actions: [
      {
        type: 'drive',
        label: 'Demo Video',
        href: 'https://drive.google.com/file/d/1r6pe0wUgsEg1HMUJhzr-D-miqN4QJ5Lj/view',
      },
      { type: 'github', label: 'View GitHub', href: 'https://github.com/Hannan-10/Tech-Haveli' },
    ],
  },
  {
    name: 'Chatbot for Healthcare Queries',
    domain: 'Healthcare AI',
    date: '2025',
    categories: ['AI Development'],
    description: [
      'Designed and implemented an advanced NLP-based chatbot utilizing Retrieval-Augmented Generation to deliver precise and trustworthy medical responses.',
      'Integrated document retrieval with context-aware generation, ensuring accurate and relevant healthcare guidance for users.',
    ],
    technologies: ['Python', 'spaCy', 'NLTK', 'Flask', 'React'],
    actions: [
      { type: 'github', label: 'View GitHub', href: 'https://github.com/Hannan-10/Chatbot-for-Healthcare-Queries' },
    ],
  },
  {
    name: 'GameBaazi',
    domain: 'Online GameStore',
    date: '2025',
    categories: ['Web Stack'],
    description: [
      'Built a full-stack MERN platform for digital game and accessory sales with secure transactions and personalized user dashboards.',
      'Integrated real-time order tracking and seamless delivery workflows for both digital downloads and physical products.',
    ],
    technologies: ['React.js', 'MongoDB', 'Express.js', 'Node.js'],
    actions: [
      { type: 'github', label: 'View GitHub', href: 'https://github.com/Hannan-10/Game-Baazi' },
      {
        type: 'linkedin',
        label: 'LinkedIn Post',
        href: 'https://www.linkedin.com/posts/muhammad-hammad-69aa36248_reactjs-nodejs-fullstackdevelopment-activity-7287887324707704834-9a5F?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD0kn0MB9Jn9CJa1us02Vx4e94Ohq14elRk',
      },
    ],
  },
  {
    name: 'Cricket Bazaar',
    domain: 'Cricket Analytics Platform',
    date: '2024',
    categories: ['AI Development', 'Web Stack'],
    description: [
      'Developed predictive models using regression and classification to estimate IPL auction prices based on historical player data.',
      'Integrated the models into a responsive web app for interactive visualization and exploration of player insights and auction trends.',
    ],
    technologies: ['Python', 'Flask', 'HTML', 'CSS', 'Bootstrap'],
    actions: [
      { type: 'github', label: 'View GitHub', href: 'https://github.com/Hannan-10/Cricket-Bazar' },
    ],
  },
  {
    name: 'Billee Sense',
    domain: 'Energy Consumption Analysis',
    date: '2024',
    categories: ['AI Development'],
    description: [
      'Built a predictive energy management system using Linear Regression and Neural Networks to forecast consumption patterns.',
      'Implemented data preprocessing, clustering, and interactive visualizations for data-driven energy optimization.',
    ],
    technologies: ['Python', 'HTML', 'CSS', 'GitHub'],
    actions: [
      { type: 'github', label: 'View GitHub', href: 'https://github.com/Hannan-10/AI-Project-Energy-Consumption' },
    ],
  },
  {
    name: 'Edit Pixel',
    domain: 'Image Editor Mobile App',
    date: '2024',
    categories: ['Mobile Development'],
    description: [
      'Developed a mobile image editor app using Kotlin and Jetpack Compose.',
      'Included real-time filters, cropping, and enhancement tools with responsive UI behavior.',
      'Focused on smooth performance and an intuitive editing experience.',
    ],
    technologies: ['Kotlin', 'Jetpack Compose', 'Jira', 'GitHub', 'Figma'],
    actions: [
      { type: 'github', label: 'View GitHub', href: 'https://github.com/Hannan-10/Edit-Pixel---Android-Application' },
    ],
  },
  {
    name: 'Speedify',
    domain: 'Courier Management System - CMS',
    date: '2023',
    categories: ['Desktop Apps'],
    description: [
      'Developed a desktop-based courier management system in Java using NetBeans to automate parcel delivery operations.',
      'Built modules for user management, parcel booking, tracking, admin reporting, and logistics workflows.',
      'Integrated delivery scheduling, inventory handling, and secure authentication for scalable operations.',
    ],
    technologies: ['Java', 'NetBeans', 'MySQL', 'Swing', 'JDBC', 'GitHub'],
    actions: [
      { type: 'github', label: 'View GitHub', href: 'https://github.com/Hannan-10/SDA-Project-Speedify-' },
    ],
  },
  {
    name: 'JPEG Compression System',
    domain: 'Digital Image Processing Project',
    date: '2023',
    categories: ['AI Development'],
    description: [
      'Developed a JPEG image compression system for grayscale images using Python and NumPy.',
      'Implemented encoding and decoding with DCT, quantization, and zig-zag scanning.',
      'Visualized each process stage using Matplotlib to demonstrate compression effectiveness and reconstruction accuracy.',
    ],
    technologies: ['Python', 'NumPy', 'SciPy', 'PIL', 'Matplotlib', 'Jupyter Notebook', 'GitHub'],
    actions: [
      { type: 'github', label: 'View GitHub', href: 'https://github.com/Hannan-10/JPEG-Compression-System' },
    ],
  },
];

function TechStack({ technologies }) {
  return (
    <div className="project-tech-list" aria-label="Technologies">
      {technologies.map((tech) => {
        const icon = techIcons[tech] || systemIcon;

        return (
          <span key={tech}>
            <img src={icon} alt="" />
            {tech}
          </span>
        );
      })}
    </div>
  );
}

function ProjectMeta({ domain, date }) {
  return (
    <div className="project-meta">
      <p className="project-domain">{domain}</p>
      <span className="project-date">
        <img src={calendarIcon} alt="" />
        {date}
      </span>
    </div>
  );
}

function ProjectActions({ project }) {
  const actions = project.actions || [{ type: 'github', label: 'View GitHub', href: '#projects' }];

  return (
    <div className="project-action-row" aria-label={`${project.name} links`}>
      {actions.map((action) => {
        const icon = actionIcons[action.type] || systemIcon;

        return (
          <a
            className={`project-source-link is-${action.type}`}
            href={action.href}
            key={`${project.name}-${action.label}`}
            target={action.href.startsWith('http') ? '_blank' : undefined}
            rel={action.href.startsWith('http') ? 'noreferrer' : undefined}
            aria-label={`${action.label} for ${project.name}`}
          >
            <span className="project-action-icon">
              <img src={icon} alt="" />
            </span>
            <span>{action.label}</span>
          </a>
        );
      })}
    </div>
  );
}

function projectMatchesFilter(project, activeFilter) {
  return activeFilter === 'All Projects' || project.categories.includes(activeFilter);
}

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All Projects');
  const showFeaturedProject = projectMatchesFilter(featuredProject, activeFilter);
  const visibleProjects = useMemo(
    () => projects.filter((project) => projectMatchesFilter(project, activeFilter)),
    [activeFilter],
  );

  return (
    <section className="projects-section" id="projects" aria-labelledby="projects-title">
      <div className="projects-heading">
        <p className="section-kicker">Projects</p>
        <h2 id="projects-title">Selected work shaped around practical product problems.</h2>
      </div>

      <div className="project-filter-bar" aria-label="Project filters">
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

      {showFeaturedProject && (
        <article className="featured-project" aria-labelledby="featured-project-title">
          <div className="project-visual">
            <img src={fypImage} alt="Virtuel Elegance final year project overview" />
          </div>

          <div className="project-copy">
            <h3 id="featured-project-title">{featuredProject.name}</h3>
            <ProjectMeta domain={featuredProject.domain} date={featuredProject.date} />
            <ul className="project-bullets">
              {featuredProject.description.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="project-tech-block">
              <p>Technologies</p>
              <TechStack technologies={featuredProject.technologies} />
            </div>

            <ProjectActions project={featuredProject} />
          </div>
        </article>
      )}

      <div className="project-compact-grid">
        {visibleProjects.map((project) => (
          <article className="compact-project" key={project.name}>
            <h3>{project.name}</h3>
            <ProjectMeta domain={project.domain} date={project.date} />
            <ul className="project-bullets">
              {project.description.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="project-tech-block">
              <p>Technologies</p>
              <TechStack technologies={project.technologies} />
            </div>
            <ProjectActions project={project} />
          </article>
        ))}
      </div>
    </section>
  );
}
