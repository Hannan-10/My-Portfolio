import React from 'react';
import emailIcon from '../../../assets/icons/gmail.svg';
import githubIcon from '../../../assets/icons/github.svg';
import linkedinIcon from '../../../assets/icons/linkedin.svg';
import upworkIcon from '../../../assets/icons/upwork.svg';

const links = [
  { label: 'Email', href: 'mailto:hannan11862@gmail.com', icon: emailIcon },
  { label: 'GitHub', href: 'https://github.com/Hannan-10', icon: githubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hannan-fareed/', icon: linkedinIcon },
  { label: 'Upwork', href: 'https://www.upwork.com/freelancers/~018cfc1df536ef5df9?mp_source=share', icon: upworkIcon },
];

export function ClosingSection() {
  return (
    <footer className="closing-section" aria-label="Site footer">
      <div className="closing-inner">
        <div className="closing-sig">
          <span className="closing-name">Hannan Fareed</span>
          <span className="closing-dot" aria-hidden="true" />
          <span className="closing-tagline">Building with purpose.</span>
        </div>

        <p className="closing-note">
          Thanks for making it this far. If something here resonated,{' '}
          <a href="#contact" className="closing-cta-link">let's talk.</a>
        </p>

        <div className="closing-socials" aria-label="Social links">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-label={link.label}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              className="closing-social-btn"
            >
              <img src={link.icon} alt="" width="18" height="18" />
            </a>
          ))}
        </div>

        <p className="closing-copy">
          &copy; {new Date().getFullYear()} Hannan Fareed. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
