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
            <span class="switch__glow" aria-hidden="true"></span>
            <span class="switch__knob" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path class="bulb" d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2h5c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z"/>
              </svg>
            </span>
          </button>
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
      background: linear-gradient(90deg, #14b8a6 0%, #7ee8c7 100%);
      transition: background .4s ease, border-color .3s ease;
    }
    .switch--dark { background: linear-gradient(90deg, #7a1d6b 0%, #e0457b 100%); }
    .switch__glow {
      position: absolute; left: 6px; top: 50%; width: 30px; height: 30px; margin-top: -15px; border-radius: 50%;
      background: radial-gradient(circle, rgb(255 255 255 / .75), transparent 70%);
      transition: transform .4s cubic-bezier(.5, 1.6, .5, 1), opacity .3s;
    }
    .switch--dark .switch__glow { transform: translateX(32px); opacity: .25; }
    .switch__knob {
      position: absolute; top: 3px; left: 3px; width: 26px; height: 26px; border-radius: 50%;
      display: grid; place-items: center;
      background: #fff8d6; color: #c47a00;
      box-shadow: 0 2px 6px rgb(0 0 0 / .3);
      transition: transform .4s cubic-bezier(.5, 1.6, .5, 1), background .4s ease, color .4s ease;
    }
    .bulb { fill: #ffd84d; transition: fill .3s; }
    .switch--dark .switch__knob { transform: translateX(32px); background: #2b1030; color: #f3b6d0; }
    .switch--dark .bulb { fill: transparent; }
    .switch:hover { border-color: var(--accent); }

    @media (max-width: 860px) {
      .nav__burger { display: grid; }
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
