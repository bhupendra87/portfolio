import { Component, computed, signal } from '@angular/core';
import { EXPERIENCE, PROJECTS } from '../data/portfolio.data';

@Component({
  selector: 'app-projects',
  template: `
    <section class="section" id="projects">
      <div class="wrap">
        <h2 class="section__title">Projects I have shipped</h2>
        @if (!hasProjects) {
          <p class="section__lead">Project details are being updated. For now, these are the organisations I have built software for.</p>
          <ul class="orgs">
            @for (c of companies; track c) { <li class="org">{{ c }}</li> }
          </ul>
        } @else {
        <p class="section__lead">Enterprise platforms, data pipelines and APIs. Filter by where I built them.</p>
        <p class="note">Titles and details are kept general to respect client confidentiality. No client data or source code is shown.</p>

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
              <ul class="card__pts">
                @for (h of pr.highlights; track h) { <li>{{ h }}</li> }
              </ul>
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
        }
      </div>
    </section>
  `,
  styles: `
    .orgs { display: flex; flex-wrap: wrap; gap: 14px; margin: 32px 0 0; padding: 0; list-style: none; }
    .org { --c: var(--accent); border-left: 5px solid var(--c) !important; padding: 18px 28px; background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius); font: 700 1.25rem var(--font-display); letter-spacing: -.01em; }
    .org:nth-child(2) { --c: var(--teal); }
    .org:nth-child(3) { --c: var(--coral); }
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
    .note { margin-top: 12px; color: var(--muted); font-size: .95rem; max-width: 62ch; }
    .card__sum { color: var(--ink); }
    .card__pts { display: grid; gap: 6px; color: var(--muted); font-size: .98rem; flex: 1; list-style: none; margin: 0; padding: 0; }
    .card__pts li { position: relative; padding-left: 18px; }
    .card__pts li::before { content: ''; position: absolute; left: 0; top: .72em; width: 8px; height: 2px; background: var(--accent); }
    .card__tags { display: flex; flex-wrap: wrap; gap: 6px; list-style: none; margin: 0; padding: 0; }
    .card__links { display: flex; gap: 16px; font-weight: 600; }
    .card__links a { color: var(--accent); }
    @media (max-width: 960px) { .card, .card--feat { grid-column: span 3; } }
    @media (max-width: 640px) { .grid { grid-template-columns: 1fr; } .card, .card--feat { grid-column: auto; } }
  `,
})
export class ProjectsSection {
  readonly hasProjects = PROJECTS.length > 0;
  readonly companies = EXPERIENCE.map((e) => e.company.replace(' Private Limited', ''));
  readonly filters = ['All', 'Teleperformance', 'Virtual Employee', 'Softdew Tech'];
  readonly active = signal('All');
  readonly shown = computed(() => {
    const a = this.active();
    return a === 'All' ? PROJECTS : PROJECTS.filter((p) => p.company === a);
  });
}
