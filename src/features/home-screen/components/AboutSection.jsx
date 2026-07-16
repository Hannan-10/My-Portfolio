import React from 'react';
import resume from '../../../assets/documents/resume.pdf';
import emailIcon from '../../../assets/icons/gmail.svg';
import githubIcon from '../../../assets/icons/github.svg';
import linkedinIcon from '../../../assets/icons/linkedin.svg';
import phoneIcon from '../../../assets/icons/phone.svg';

const contactLinks = [
  {
    label: 'Email',
    value: 'hannan11862@gmail.com',
    href: 'mailto:hannan11862@gmail.com',
    icon: emailIcon,
  },
  {
    label: 'GitHub',
    value: 'Hannan-10',
    href: 'https://github.com/Hannan-10',
    icon: githubIcon,
  },
  {
    label: 'LinkedIn',
    value: 'hannan-fareed',
    href: 'https://www.linkedin.com/in/hannan-fareed/',
    icon: linkedinIcon,
  },
  {
    label: 'Phone',
    value: '03364611862',
    href: 'tel:+923364611862',
    icon: phoneIcon,
  },
];

export function AboutSection() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="about-content">
        <div className="about-copy">
          <p className="section-kicker">About</p>
          <h2 id="about-title">Building useful software with steady curiosity.</h2>
          <p>
            Proactive Computer Science graduate with hands-on experience in software
            development, full-stack engineering, and system design. Proven ability to solve
            problems, adapt to new technologies, and thrive in dynamic environments. Passionate
            about learning and applying technical skills to deliver practical, impactful
            solutions.
          </p>
          <a className="cv-button" href={resume} target="_blank" rel="noreferrer">
            View my CV
          </a>
        </div>

        <div className="contact-panel" aria-label="Contact details">
          {contactLinks.map((link) => (
            <a key={link.label} className="contact-link" href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined}>
              <span className="contact-icon">
                <img src={link.icon} alt="" />
              </span>
              <span>
                <span className="contact-label">{link.label}</span>
                <span className="contact-value">{link.value}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
