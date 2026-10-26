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
          <button class="switch" type="button" role="switch" (click)="theme.toggle()"
            [class.switch--dark]="theme.theme() === 'dark'"
            [attr.aria-checked]="theme.theme() === 'dark'"
            [attr.aria-label]="theme.theme() === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'">
            <span class="switch__stars" aria-hidden="true"><i></i><i></i><i></i></span>
            <span class="switch__cloud" aria-hidden="true"></span>
            <span class="switch__knob" aria-hidden="true">
              <svg class="sun" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="4" fill="currentColor"/><path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4L6 18M18 6l1.4-1.4"/></svg>
              <svg class="moon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7z"/></svg>
            </span>
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

    .switch {
      position: relative; width: 68px; height: 36px; padding: 0; cursor: pointer; overflow: hidden;
      border-radius: 999px; border: 2px solid color-mix(in srgb, var(--ink) 14%, transparent);
      background: linear-gradient(180deg, #7cc8ff 0%, #ffe3a3 100%);
      transition: background .4s ease, border-color .3s ease;
    }
    .switch--dark { background: linear-gradient(180deg, #1b1f4a 0%, #4b2a7a 100%); }
    .switch__knob {
      position: absolute; top: 3px; left: 3px; width: 26px; height: 26px; border-radius: 50%;
      display: grid; place-items: center; color: #fff;
      background: linear-gradient(135deg, #ffd24d, #ff9a3c);
      box-shadow: 0 2px 6px rgb(0 0 0 / .3);
      transition: transform .4s cubic-bezier(.5, 1.6, .5, 1), background .4s ease;
    }
    .switch--dark .switch__knob { transform: translateX(32px); background: linear-gradient(135deg, #e9edff, #b9c4ff); color: #3b3f8f; }
    .sun, .moon { position: absolute; transition: opacity .25s, transform .4s; }
    .sun { color: #fff; }
    .moon { opacity: 0; transform: rotate(-60deg) scale(.6); }
    .switch--dark .sun { opacity: 0; transform: rotate(60deg) scale(.6); }
    .switch--dark .moon { opacity: 1; transform: none; }
    .switch__cloud { position: absolute; right: 9px; bottom: 5px; width: 20px; height: 8px; border-radius: 8px; background: #fff; opacity: .9; transition: opacity .3s, transform .4s; }
    .switch__cloud::before { content: ''; position: absolute; left: 4px; top: -5px; width: 9px; height: 9px; border-radius: 50%; background: #fff; }
    .switch--dark .switch__cloud { opacity: 0; transform: translateY(8px); }
    .switch__stars { position: absolute; inset: 0; opacity: 0; transition: opacity .4s; }
    .switch--dark .switch__stars { opacity: 1; }
    .switch__stars i { position: absolute; width: 3px; height: 3px; border-radius: 50%; background: #fff; }
    .switch__stars i:nth-child(1) { left: 12px; top: 9px; }
    .switch__stars i:nth-child(2) { left: 22px; top: 21px; width: 2px; height: 2px; }
    .switch__stars i:nth-child(3) { left: 31px; top: 11px; width: 2px; height: 2px; }
    .switch:hover { border-color: var(--accent); }

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
