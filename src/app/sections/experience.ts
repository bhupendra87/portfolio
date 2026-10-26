import { Component } from '@angular/core';
import { EXPERIENCE } from '../data/portfolio.data';

@Component({
  selector: 'app-experience',
  template: `
    <section class="section exp" id="experience">
      <div class="wrap">
        <h2 class="section__title">Where I have worked</h2>
        <p class="section__lead">Three companies, one thread: turning messy business processes into reliable software.</p>

        <ol class="tl">
          @for (e of jobs; track e.company) {
            <li class="tl__item">
              <div class="tl__when">{{ e.period }}</div>
              <article class="tl__card">
                <h3>{{ e.role }}</h3>
                <p class="tl__co">{{ e.company }}</p>
                <p class="tl__hi">{{ e.highlight }}</p>
                <ul>
                  @for (pt of e.points; track pt) { <li>{{ pt }}</li> }
                </ul>
              </article>
            </li>
          }
        </ol>
      </div>
    </section>
  `,
  styles: `
    .exp { background: var(--surface); border-block: 1px solid var(--line); }
    .tl { list-style: none; margin: 48px 0 0; padding: 0; position: relative; }
    .tl::before { content: ''; position: absolute; top: 8px; bottom: 8px; left: 200px; width: 2px; background: var(--line); }
    .tl__item { display: grid; grid-template-columns: 200px 1fr; gap: 0; position: relative; padding-bottom: 36px; }
    .tl__item:last-child { padding-bottom: 0; }
    .tl__when { padding-top: 6px; padding-right: 32px; text-align: right; font: 600 .98rem var(--font-body); color: var(--muted); }
    .tl__card { margin-left: 32px; position: relative; padding: 24px 28px; border: 1px solid var(--line); border-radius: var(--radius); background: var(--bg); transition: border-color .2s, transform .2s; }
    .tl__card:hover { border-color: var(--accent); transform: translateX(4px); }
    .tl__card::before { content: ''; position: absolute; left: -39px; top: 14px; width: 14px; height: 14px; border-radius: 50%; background: var(--accent); border: 3px solid var(--surface); box-shadow: 0 0 0 1px var(--accent); }
    h3 { font-size: 1.5rem; }
    .tl__co { color: var(--accent); font-weight: 600; margin-top: 4px; }
    .tl__hi { margin-top: 14px; font-weight: 500; }
    .tl__card ul { margin-top: 12px; display: grid; gap: 8px; color: var(--muted); }
    .tl__card li { position: relative; padding-left: 20px; }
    .tl__card li::before { content: ''; position: absolute; left: 0; top: .7em; width: 8px; height: 2px; background: var(--accent); }

    @media (max-width: 760px) {
      .tl::before { left: 6px; }
      .tl__item { grid-template-columns: 1fr; padding-left: 28px; }
      .tl__when { text-align: left; padding: 0 0 8px; }
      .tl__card { margin-left: 0; }
      .tl__card::before { left: -29px; top: -26px; }
      .tl__card:hover { transform: none; }
    }
  `,
})
export class ExperienceSection {
  readonly jobs = EXPERIENCE;
}
