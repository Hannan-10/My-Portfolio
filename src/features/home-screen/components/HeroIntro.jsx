import React, { useEffect, useState } from 'react';
import emailIcon from '../../../assets/icons/email.svg';
import githubIcon from '../../../assets/icons/github.svg';
import linkedinIcon from '../../../assets/icons/linkedin.svg';

const socialLinks = [
  { label: 'Email', href: 'mailto:hannan11862@gmail.com', icon: emailIcon },
  { label: 'GitHub', href: 'https://github.com/Hannan-10', icon: githubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hannan-fareed/', icon: linkedinIcon },
];

const titles = ['Software Engineer', 'Full Stack Developer', 'Mobile App Developer'];
const typeSpeed = 85;
const eraseSpeed = 42;
const holdTime = 1400;

export function HeroIntro() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [visibleLetters, setVisibleLetters] = useState(0);
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const isComplete = visibleLetters === currentTitle.length;
    const isEmpty = visibleLetters === 0;
    const delay = isComplete && !isErasing ? holdTime : isErasing ? eraseSpeed : typeSpeed;

    const timer = window.setTimeout(() => {
      if (!isErasing && isComplete) {
        setIsErasing(true);
        return;
      }

      if (isErasing && isEmpty) {
        setTitleIndex((current) => (current + 1) % titles.length);
        setIsErasing(false);
        return;
      }

      setVisibleLetters((count) => count + (isErasing ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [isErasing, titleIndex, visibleLetters]);

  const currentTitle = titles[titleIndex].slice(0, visibleLetters);

  return (
    <section className="hero-intro" id="home">
      <div className="intro-copy">
        <p className="eyebrow">Hi, I am</p>
        <h1>Hannan Fareed</h1>
        <p className="role" aria-label={titles[titleIndex]}>
          <span>{currentTitle}</span>
          <span className="typing-cursor" aria-hidden="true" />
        </p>
      </div>

      <div className="social-links" aria-label="Social links">
        {socialLinks.map((link) => (
          <a key={link.label} href={link.href} aria-label={link.label} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined}>
            <img src={link.icon} alt="" />
          </a>
        ))}
      </div>
    </section>
  );
}
