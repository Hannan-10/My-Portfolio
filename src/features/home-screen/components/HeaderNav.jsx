import React from 'react';

const navItems = ['About', 'Experience', 'Education', 'Projects', 'Skills'];

export function HeaderNav() {
  return (
    <header className="header-nav">
      <span className="brand-spacer" aria-hidden="true" />

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
