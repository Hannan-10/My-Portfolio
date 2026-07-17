import React, { useEffect, useRef } from 'react';
import awardIcon from '../../../assets/icons/award.svg';
import calendarIcon from '../../../assets/icons/calendar.svg';
import locationIcon from '../../../assets/icons/location.svg';
import sparkIcon from '../../../assets/icons/spark.svg';
import alliedImage from '../../../assets/images/education/allied.jpeg';
import fastImage from '../../../assets/images/education/fast.jpg';
import gcuImage from '../../../assets/images/education/gcu.jpg';

const educationItems = [
  {
    degree: 'Bachelors of Science in Computer Science',
    institute: 'FAST NUCES',
    campus: 'Lahore',
    period: '16/08/2021 - 17/05/2025',
    result: 'CGPA: 2.96',
    image: fastImage,
    bullets: [
      'Specialized in Web Development, Machine Learning, Artificial Intelligence, Data Science, and Natural Language Processing.',
      'Built a strong foundation in software engineering, database systems, and practical product development.',
    ],
  },
  {
    degree: 'Intermediate in FSc Pre-Engineering',
    institute: 'Government College University',
    campus: 'Lahore',
    period: '01/09/2019 - 15/05/2021',
    result: 'Marks: 1052/1100',
    image: gcuImage,
    bullets: [
      'Participated in speeches and multiple intercollegiate competitions.',
      'Actively represented GCU in co-curricular events while maintaining strong academics.',
    ],
  },
  {
    degree: 'Matriculation in Computer Science',
    institute: 'Allied School',
    campus: 'Lahore',
    period: '01/03/2017 - 15/05/2019',
    result: 'Marks: 1060/1100',
    image: alliedImage,
    bullets: [
      'Represented my school in programming and math competitions.',
      'Participated in speeches and other co-curricular events with consistent academic performance.',
    ],
  },
];

export function EducationSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('education-section--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="education-section" id="education" aria-labelledby="education-title" ref={sectionRef}>
      <div className="education-heading">
        <p className="section-kicker">Education</p>
        <h2 id="education-title">Academic path that shaped the engineering base.</h2>
      </div>

      <div className="education-tree">
        {educationItems.map((item) => (
          <article className="education-card" key={item.degree}>
            <img className="education-bg" src={item.image} alt="" />
            <div className="education-node" aria-hidden="true" />
            <div className="education-card-content">
              <h3>{item.degree}</h3>
              <p className="education-institute">{item.institute}</p>

              <div className="education-meta">
                <p>
                  <span className="education-icon">
                    <img src={locationIcon} alt="" />
                  </span>
                  {item.campus}
                </p>
                <p>
                  <span className="education-icon">
                    <img src={calendarIcon} alt="" />
                  </span>
                  {item.period}
                </p>
                <p>
                  <span className="education-icon">
                    <img src={awardIcon} alt="" />
                  </span>
                  {item.result}
                </p>
              </div>

              <ul className="education-bullets">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>
                    <img src={sparkIcon} alt="" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
