import React from 'react';
import logo from '../../../assets/icons/brand-mark.svg';

const navItems = ['About', 'Experience', 'Education', 'Projects', 'Skills'];

export function HeaderNav() {
  return (
    <header className="header-nav">
      <a className="brand-link" href="#home" aria-label="Portfolio home">
        <img src={logo} alt="" />
      </a>

      <nav className="nav-links" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`}>
            {item}
          </a>
        ))}
      </nav>

      <a className="contact-button" href="#contact">
        Contact me
      </a>
    </header>
  );
}
