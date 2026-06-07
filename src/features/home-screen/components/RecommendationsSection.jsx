import React, { useEffect, useRef } from 'react';

import hamzaPhoto from '../../../assets/images/recommendations/Hamza.jpg';
import hammadPhoto from '../../../assets/images/recommendations/Hammad.jpg';
import sattarPhoto from '../../../assets/images/recommendations/Sir Sattar.jpg';
import ghazalPhoto from '../../../assets/images/recommendations/Miss Ghazal.jpg';
import zunnurainPhoto from '../../../assets/images/recommendations/Sir Zunnurain.jpg';
import shehrozPhoto from '../../../assets/images/recommendations/Shehroz.png';
import hashimPhoto from '../../../assets/images/recommendations/Hashim.png';
import omerPhoto from '../../../assets/images/recommendations/Omer Bhai.jpg';

import glowingsoftLogo from '../../../assets/images/recommendations/glowingsoft.jpg';
import govtCollegeLogo from '../../../assets/images/recommendations/govt college logo.png';
import fastLogo from '../../../assets/images/recommendations/fast nu logo.png';

function gridCols(count) {
  if (count === 1) return 'min(100%, 420px)';
  if (count === 4) return 'repeat(2, 1fr)';
  return `repeat(${count}, 1fr)`;
}

function handleCardTilt(e) {
  const inner = e.currentTarget.querySelector('.rec-card-inner');
  if (!inner) return;
  const r = inner.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width - 0.5;
  const y = (e.clientY - r.top) / r.height - 0.5;
  inner.style.transition = 'box-shadow 280ms ease';
  inner.style.transform = `perspective(900px) translateY(-14px) scale(1.022) rotateX(${y * -7}deg) rotateY(${x * 9}deg)`;
}

function handleCardReset(e) {
  const inner = e.currentTarget.querySelector('.rec-card-inner');
  if (!inner) return;
  inner.style.transition = 'transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 280ms ease';
  inner.style.transform = '';
}

const groups = [
  {
    key: 'glowingsoft',
    label: 'Glowingsoft Technologies',
    shortLabel: 'Glowingsoft',
    tag: 'Professional · Software Engineering',
    logo: glowingsoftLogo,
    accent: '#d97706',
    accentSoft: 'rgb(217 119 6 / 12%)',
    accentSoft2: 'rgb(217 119 6 / 22%)',
    members: [
      {
        name: 'Omer Toqeer',
        title: 'Senior Software Engineer · AI Generalist',
        relation: 'Direct Manager',
        linkedin: 'https://www.linkedin.com/in/cwomerai/',
        photo: omerPhoto,
        quote:
          'I had the opportunity to work with Hannan at Glowing Soft Technologies. He is a motivated and dedicated individual with a strong willingness to learn and grow. Even when faced with tasks outside his prior experience, he consistently showed the ability to pick things up quickly and adapt. Hannan maintains a positive attitude toward learning and is always open to improving his skills. With his mindset and work ethic, I believe he has great potential to continue developing as a strong professional.',
      },
      {
        name: 'Muhammad Shehroz Aziz',
        title: 'Software Engineer · MERN Stack & AI/ML',
        relation: 'Team Colleague',
        linkedin: 'https://www.linkedin.com/in/muhammad-shehroz-aziz-6b4753251/',
        photo: shehrozPhoto,
        quote:
          'I had the pleasure of working with Hannan at Glowingsoft Technologies. He is a skilled developer who consistently delivered clean, reliable code and showed great problem-solving abilities. Hannan is a quick learner, a strong team player, and always willing to help others.',
      },
      {
        name: 'Hashim Khan',
        title: 'Associate Software Engineer · Full-Stack & AI',
        relation: 'Team Colleague',
        linkedin: 'https://www.linkedin.com/in/hashim-khan-5b853a307/',
        photo: hashimPhoto,
        quote:
          'Had a privilege working with Hannan at Glowingsoft Technologies, were able to accomplish and complete many projects together from scratch all the way to deployment.',
      },
    ],
  },
  {
    key: 'fast',
    label: 'FAST-NUCES University',
    shortLabel: 'FAST-NUCES',
    tag: 'Academic · CS Department',
    logo: fastLogo,
    accent: '#7c3aed',
    accentSoft: 'rgb(124 58 237 / 12%)',
    accentSoft2: 'rgb(124 58 237 / 22%)',
    members: [
      {
        name: 'Muhammad Zunnurain Hussain',
        title: 'Cybersecurity Architect & AI Leader · IEEE Senior Member',
        relation: 'Mentor · Information Security',
        linkedin: 'https://www.linkedin.com/in/muhammad-zunnurain-hussain-50641b61/',
        photo: zunnurainPhoto,
        quote:
          'I am pleased to recommend Hannan Fareed, who consistently demonstrated a strong commitment to learning and professional growth. His ability to connect theoretical concepts with practical scenarios was particularly impressive. Beyond his technical understanding, Hannan displayed professionalism, reliability, and a collaborative attitude. I am confident that Hannan Fareed has the discipline, critical thinking ability, and ethical mindset required to excel in Information Security roles.',
      },
      {
        name: 'Ghazal Muneer',
        title: 'Lecturer, Researcher & Creative Writer',
        relation: 'Teacher at FAST-NUCES',
        linkedin: 'https://www.linkedin.com/in/ghazal-muneer-9037a518b/',
        photo: ghazalPhoto,
        quote:
          "I had the privilege of teaching Hannan Fareed at Fast-NUCES and I can confidently say he is one of the most impressive students I've encountered. He is liberal in his thinking, brilliant in his approach, highly competent, and deeply considerate of others. I have no doubt that he will continue to grow and make meaningful contributions wherever he goes. I strongly recommend him for any opportunity he chooses to pursue.",
      },
      {
        name: 'Dr. Abdul Sattar',
        title: 'Assistant Professor · FAST-NUCES Lahore',
        relation: 'Mentor & Professor',
        linkedin: 'https://www.linkedin.com/in/dr-abdul-sattar/',
        photo: sattarPhoto,
        quote:
          'I taught Hannan course of Modern Politics and Government, and he stood out as one of the most thoughtful and engaged students in the class. Coming from a Computer Science background, he brought a very fresh and analytical perspective to political discussions. He is also a very respectful student, serious in his approach, and carries a level of maturity that is rare at this stage. I am pleased to strongly recommend him with best wishes.',
      },
      {
        name: 'Muhammad Hammad',
        title: 'Associate Software Engineer @ Ebryx · Full Stack & AI',
        relation: 'Fellow Developer',
        linkedin: 'https://www.linkedin.com/in/muhammad-hammad-69aa36248/',
        photo: hammadPhoto,
        quote:
          'I have worked with Hannan on many projects and have always found his competence top notch. He is a great software engineer with extremely good communication. Always a huge plus to have him by your side.',
      },
    ],
  },
  {
    key: 'govt',
    label: 'Government College University',
    shortLabel: 'GCU Lahore',
    tag: 'Academic · Computer Science',
    logo: govtCollegeLogo,
    accent: '#2563eb',
    accentSoft: 'rgb(37 99 235 / 12%)',
    accentSoft2: 'rgb(37 99 235 / 22%)',
    members: [
      {
        name: 'Hamza Aziz',
        title: 'Software Engineer · 1.5+ Yrs Experience',
        relation: 'Classmate & Fellow Engineer',
        linkedin: 'https://www.linkedin.com/in/iamhamzaaziz/',
        photo: hamzaPhoto,
        quote:
          'I know Hannan since our days at Government College, and he has always stood out as a quick learner. With a strong foundation in programming, he confidently handles everything from core concepts to complex technical challenges. He has solid hands-on experience with the MERN stack and consistently demonstrates a hardworking, professional attitude. He approaches problems methodically and delivers quality work with dedication.',
      },
    ],
  },
];

export function RecommendationsSection() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('rec-card--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  let cardRefIndex = 0;

  return (
    <section
      className="recommendations-section"
      id="recommendations"
      aria-labelledby="recommendations-title"
    >
      <div className="rec-bg-blobs" aria-hidden="true">
        <span className="rec-blob rec-blob--blue" />
        <span className="rec-blob rec-blob--purple" />
        <span className="rec-blob rec-blob--amber" />
      </div>

      <div className="recommendations-heading">
        <p className="section-kicker rec-kicker">Recommendations</p>
        <h2 id="recommendations-title">Voices that have seen me work.</h2>
        <p className="rec-subtitle">
          Perspectives from colleagues, professors, and mentors who have worked alongside me.
        </p>
      </div>

      <div className="recommendations-groups">
        {groups.map((group) => (
          <div
            className="rec-group"
            key={group.key}
            data-group={group.key}
            style={{
              '--rec-accent': group.accent,
              '--rec-accent-soft': group.accentSoft,
              '--rec-accent-soft2': group.accentSoft2,
            }}
          >
            {/* Group header */}
            <div className="rec-group-header">
              <div className="rec-group-logo-wrap">
                <img src={group.logo} alt={group.label} className="rec-group-logo" />
              </div>
              <div className="rec-group-meta">
                <p className="rec-group-name">{group.label}</p>
                <p className="rec-group-tag">{group.tag}</p>
              </div>
              <span className="rec-group-count">
                {group.members.length} {group.members.length === 1 ? 'recommendation' : 'recommendations'}
              </span>
            </div>

            {/* Cards grid */}
            <div
              className="rec-group-grid"
              style={{ gridTemplateColumns: gridCols(group.members.length) }}
            >
              {group.members.map((rec, memberIndex) => {
                const myIndex = cardRefIndex++;
                return (
                  <article
                    className="rec-card"
                    key={rec.name}
                    ref={(el) => (cardsRef.current[myIndex] = el)}
                    style={{ '--card-delay': `${memberIndex * 110}ms` }}
                    onMouseMove={handleCardTilt}
                    onMouseLeave={handleCardReset}
                  >
                    {/* Avatar — floats above card top */}
                    <div className="rec-avatar-wrap">
                      <a
                        href={rec.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${rec.name} on LinkedIn`}
                      >
                        <div className="rec-avatar">
                          <img src={rec.photo} alt={rec.name} />
                        </div>
                      </a>
                    </div>

                    {/* Card body */}
                    <div className="rec-card-inner">
                      <div className="rec-card-body">
                        <div className="rec-name-area">
                          <a
                            href={rec.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="rec-name-link"
                          >
                            {rec.name}
                          </a>
                          <p className="rec-card-title">{rec.title}</p>
                        </div>

                        <div className="rec-quote-mark" aria-hidden="true">&ldquo;</div>

                        <blockquote className="rec-quote">
                          <p>{rec.quote}</p>
                        </blockquote>
                      </div>

                      <footer className="rec-footer">
                        <span className="rec-relation">{rec.relation}</span>
                        <span className="rec-context-badge">
                          <img
                            src={group.logo}
                            alt=""
                            className="rec-context-icon"
                            aria-hidden="true"
                          />
                          {group.shortLabel}
                        </span>
                      </footer>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
