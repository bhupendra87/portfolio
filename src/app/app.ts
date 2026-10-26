import { Component } from '@angular/core';
import { Navbar } from './sections/navbar';
import { Hero } from './sections/hero';
import { About } from './sections/about';
import { ExperienceSection } from './sections/experience';
import { ProjectsSection } from './sections/projects';
import { SkillsSection } from './sections/skills';
import { Contact } from './sections/contact';
import { Footer } from './sections/footer';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, About, ExperienceSection, ProjectsSection, SkillsSection, Contact, Footer],
  template: `
    <a class="skip" href="#main">Skip to content</a>
    <app-navbar />
    <main id="main">
      <app-hero />
      <app-about />
      <app-experience />
      <app-projects />
      <app-skills />
      <app-contact />
    </main>
    <app-footer />
  `,
  styles: `
    .skip {
      position: fixed; left: 12px; top: -60px; z-index: 100;
      background: var(--accent); color: var(--accent-ink);
      padding: 10px 16px; border-radius: 8px; text-decoration: none;
      transition: top .15s;
    }
    .skip:focus { top: 12px; }
  `,
})
export class App {}
