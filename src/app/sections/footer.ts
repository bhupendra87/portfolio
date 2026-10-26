import { Component } from '@angular/core';
import { PROFILE } from '../data/portfolio.data';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="foot">
      <div class="wrap foot__in">
        <p>© {{ year }} {{ p.name }}. All rights reserved.</p>
        <nav aria-label="Social links">
          <a [href]="'mailto:' + p.email">Email</a>
          @if (p.linkedin) { <a [href]="p.linkedin" target="_blank" rel="noopener">LinkedIn</a> }
          @if (p.github) { <a [href]="p.github" target="_blank" rel="noopener">GitHub</a> }
        </nav>
      </div>
    </footer>
  `,
  styles: `
    .foot { border-top: 1px solid var(--line); padding-block: 28px; color: var(--muted); font-size: .95rem; }
    .foot__in { display: flex; flex-wrap: wrap; gap: 12px 24px; justify-content: space-between; }
    nav { display: flex; gap: 20px; }
    a { text-underline-offset: 4px; }
  `,
})
export class Footer {
  readonly p = PROFILE;
  readonly year = new Date().getFullYear();
}
