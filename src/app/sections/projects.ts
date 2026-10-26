import { Component, computed, signal } from '@angular/core';
import { PROJECTS } from '../data/portfolio.data';

@Component({
  selector: 'app-projects',
  template: `
    <section class="section" id="projects">
      <div class="wrap">
        <h2 class="section__title">Projects I have shipped</h2>
        <p class="section__lead">Enterprise platforms, data pipelines and APIs. Filter by where I built them.</p>

        <div class="filters" role="group" aria-label="Filter projects by company">
          @for (f of filters; track f) {
            <button type="button" class="chip" [class.chip--on]="active() === f"
              [attr.aria-pressed]="active() === f" (click)="active.set(f)">{{ f }}</button>
          }
        </div>

        <div class="grid">
          @for (pr of shown(); track pr.title) {
            <article class="card" [class.card--feat]="pr.featured">
              <header>
                <h3>{{ pr.title }}</h3>
                <p class="card__meta">{{ pr.company }}, {{ pr.year }}</p>
              </header>
              <p class="card__sum">{{ pr.summary }}</p>
              <ul class="card__tags" aria-label="Tech stack">
                @for (t of pr.stack; track t) { <li class="tag">{{ t }}</li> }
              </ul>
              @if (pr.github || pr.demo) {
                <div class="card__links">
                  @if (pr.github) { <a [href]="pr.github" target="_blank" rel="noopener">GitHub</a> }
                  @if (pr.demo) { <a [href]="pr.demo" target="_blank" rel="noopener">Live demo</a> }
                </div>
              }
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .filters { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 32px; }
    .chip { font: 500 .95rem var(--font-body); padding: 8px 18px; border-radius: 999px; border: 1px solid var(--line); background: var(--surface); color: var(--ink); cursor: pointer; transition: background-color .15s, color .15s, border-color .15s; }
    .chip:hover { border-color: var(--accent); }
    .chip--on { background: var(--ink); color: var(--bg); border-color: var(--ink); }
    .grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 20px; margin-top: 28px; }
    .card { grid-column: span 2; display: flex; flex-direction: column; gap: 14px; padding: 26px; background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius); transition: border-color .2s, transform .2s; }
    .card:hover { border-color: var(--accent); transform: translateY(-3px); }
    .card--feat { grid-column: span 3; padding: 32px; border-color: color-mix(in srgb, var(--accent) 45%, var(--line)); }
    .card--feat h3 { font-size: 1.7rem; }
    h3 { font-size: 1.3rem; }
    .card__meta { color: var(--muted); font-size: .95rem; margin-top: 4px; }
    .card__sum { color: var(--ink); flex: 1; }
    .card__tags { display: flex; flex-wrap: wrap; gap: 6px; list-style: none; margin: 0; padding: 0; }
    .card__links { display: flex; gap: 16px; font-weight: 600; }
    .card__links a { color: var(--accent); }
    @media (max-width: 960px) { .card, .card--feat { grid-column: span 3; } }
    @media (max-width: 640px) { .grid { grid-template-columns: 1fr; } .card, .card--feat { grid-column: auto; } }
  `,
})
export class ProjectsSection {
  readonly filters = ['All', 'Teleperformance', 'Virtual Employee', 'Softdew Tech'];
  readonly active = signal('All');
  readonly shown = computed(() => {
    const a = this.active();
    return a === 'All' ? PROJECTS : PROJECTS.filter((p) => p.company === a);
  });
}
