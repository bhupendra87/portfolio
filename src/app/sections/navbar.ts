import { Component, inject, signal } from '@angular/core';
import { PROFILE } from '../data/portfolio.data';
import { ThemeService } from '../core/theme.service';

@Component({
  selector: 'app-navbar',
  template: `
    <header class="nav" [class.nav--open]="open()">
      <div class="wrap nav__inner">
        <a class="nav__brand" href="#top" (click)="close()" aria-label="Home">{{ p.name }}</a>

        <nav class="nav__links" aria-label="Primary">
          @for (l of links; track l.id) {
            <a [href]="'#' + l.id" (click)="close()">{{ l.label }}</a>
          }
        </nav>

        <div class="nav__actions">
          <button class="icon-btn" type="button" (click)="theme.toggle()"
            [attr.aria-label]="theme.theme() === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'">
            @if (theme.theme() === 'dark') {
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
            } @else {
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>
            }
          </button>
          <a class="btn btn--primary btn--sm nav__resume" [href]="p.resumeFile" download>Download resume</a>
          <button class="icon-btn nav__burger" type="button" (click)="open.set(!open())"
            [attr.aria-expanded]="open()" aria-label="Menu">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
          </button>
        </div>
      </div>
    </header>
  `,
  styles: `
    .nav {
      position: sticky; top: 0; z-index: 50; height: var(--nav-h);
      background: color-mix(in srgb, var(--bg) 82%, transparent);
      backdrop-filter: blur(14px);
      border-bottom: 1px solid var(--line);
    }
    .nav__inner { height: 100%; display: flex; align-items: center; gap: 24px; }
    .nav__brand { font: 800 1.2rem var(--font-display); text-decoration: none; letter-spacing: -.02em; margin-right: auto; }
    .nav__links { display: flex; gap: 6px; }
    .nav__links a {
      padding: 8px 14px; border-radius: 999px; text-decoration: none;
      color: var(--muted); font-weight: 500; transition: color .15s, background-color .15s;
    }
    .nav__links a:hover { color: var(--ink); background: var(--surface-2); }
    .nav__actions { display: flex; align-items: center; gap: 10px; }
    .icon-btn {
      width: 40px; height: 40px; display: grid; place-items: center; cursor: pointer;
      border-radius: 50%; border: 1px solid var(--line); background: var(--surface); color: var(--ink);
      transition: transform .2s, border-color .2s;
    }
    .icon-btn:hover { border-color: var(--accent); transform: rotate(12deg); }
    .nav__burger { display: none; }

    @media (max-width: 860px) {
      .nav__burger { display: grid; }
      .nav__resume { display: none; }
      .nav__links {
        position: absolute; top: var(--nav-h); left: 0; right: 0;
        flex-direction: column; padding: 12px 20px 20px;
        background: var(--bg); border-bottom: 1px solid var(--line);
        display: none;
      }
      .nav--open .nav__links { display: flex; }
      .nav__links a { padding: 14px 12px; font-size: 1.1rem; }
      .nav__brand { margin-right: auto; }
    }
  `,
})
export class Navbar {
  readonly p = PROFILE;
  readonly theme = inject(ThemeService);
  readonly open = signal(false);
  readonly links = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];
  close() { this.open.set(false); }
}
