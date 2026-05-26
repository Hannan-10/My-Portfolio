import React from 'react';
import { AboutSection } from './components/AboutSection.jsx';
import { ExperienceSection } from './components/ExperienceSection.jsx';
import { HeaderNav } from './components/HeaderNav.jsx';
import { HeroIntro } from './components/HeroIntro.jsx';
import { HeroPortrait } from './components/HeroPortrait.jsx';
import { ScreenShell } from './components/ScreenShell.jsx';
import './home-screen.css';

export function HomeScreen() {
  return (
    <main className="home-screen" aria-label="Portfolio home screen">
      <ScreenShell>
        <HeaderNav />
        <HeroIntro />
        <HeroPortrait />
      </ScreenShell>
      <AboutSection />
      <ExperienceSection />
    </main>
  );
}
