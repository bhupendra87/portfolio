import { Component } from '@angular/core';
import { SKILLS } from '../data/portfolio.data';

@Component({
  selector: 'app-skills',
  template: `
    <section class="section skills" id="skills">
      <div class="wrap">
        <h2 class="section__title">Skills and tools</h2>
        <p class="section__lead">What I reach for most, grouped by where it sits in the stack.</p>
        <div class="sk">
          @for (g of groups; track g.title) {
            <div class="sk__group">
              <h3>{{ g.title }}</h3>
              <ul>
                @for (i of g.items; track i) { <li class="tag">{{ i }}</li> }
              </ul>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .skills { background: var(--surface); border-block: 1px solid var(--line); }
    .sk { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px 48px; margin-top: 44px; }
    .sk__group { --c: var(--accent); border-top: 3px solid var(--c); padding-top: 16px; }
    .sk__group:nth-child(6n+2) { --c: var(--teal); }
    .sk__group:nth-child(6n+3) { --c: var(--coral); }
    .sk__group:nth-child(6n+4) { --c: var(--signal); }
    .sk__group:nth-child(6n+5) { --c: var(--violet); }
    .sk__group:nth-child(6n+6) { --c: var(--teal); }
    h3 { font-size: 1.25rem; margin-bottom: 14px; }
    ul { display: flex; flex-wrap: wrap; gap: 8px; list-style: none; margin: 0; padding: 0; }
    .tag { background: var(--bg); border: 1px solid var(--line); padding: 5px 13px; font-size: .95rem; transition: border-color .15s, color .15s; }
    .tag:hover { border-color: var(--c); color: var(--c); }
  `,
})
export class SkillsSection {
  readonly groups = SKILLS;
}
