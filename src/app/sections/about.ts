import { Component } from '@angular/core';
import { EDUCATION, MILESTONES, SUMMARY } from '../data/portfolio.data';

@Component({
  selector: 'app-about',
  template: `
    <section class="section about" id="about">
      <div class="wrap about__grid">
        <div>
          <h2 class="section__title">About me</h2>
          <p class="about__text">{{ summary }}</p>
          <ul class="miles">
            @for (m of miles; track m.year) {
              <li><strong>{{ m.year }}</strong><span>{{ m.text }}</span></li>
            }
          </ul>
        </div>
        <aside class="edu">
          <h3>Education</h3>
          <ul>
            @for (e of edu; track e.degree) {
              <li>
                <span class="edu__deg">{{ e.degree }}</span>
                <span class="edu__sch">{{ e.school }}{{ e.year ? ' · ' + e.year : '' }}</span>
              </li>
            }
          </ul>
        </aside>
      </div>
    </section>
  `,
  styles: `
    .about__grid { display: grid; grid-template-columns: 1.3fr .7fr; gap: clamp(32px, 6vw, 80px); align-items: start; }
    .about__text { margin-top: 24px; font-size: 1.2rem; max-width: 62ch; }
    .miles { margin-top: 36px; display: grid; gap: 0; border-top: 1px solid var(--line); }
    .miles li { display: grid; grid-template-columns: 72px 1fr; gap: 16px; padding: 16px 0; border-bottom: 1px solid var(--line); }
    .miles strong { font: 700 1.1rem var(--font-display); color: var(--accent); }
    .miles span { color: var(--muted); }
    .edu { background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius); padding: 28px; }
    .edu h3 { font-size: 1.4rem; margin-bottom: 18px; }
    .edu ul { display: grid; gap: 18px; }
    .edu__deg { display: block; font-weight: 600; }
    .edu__sch { display: block; color: var(--muted); font-size: .95rem; margin-top: 2px; }
    @media (max-width: 900px) { .about__grid { grid-template-columns: 1fr; } }
  `,
})
export class About {
  readonly summary = SUMMARY;
  readonly miles = MILESTONES;
  readonly edu = EDUCATION;
}
