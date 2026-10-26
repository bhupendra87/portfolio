import { Component } from '@angular/core';
import { PROFILE } from '../data/portfolio.data';

@Component({
  selector: 'app-hero',
  template: `
    <section class="hero" id="top">
      <div class="wrap">
        <p class="hero__role">{{ p.title }} · {{ p.location }}</p>
        <h1>I build the systems that move enterprise data.</h1>
        <p class="hero__lead">
          Ten years of .NET, Python and Angular. From telecom automation to ingestion pipelines
          that turn raw CSV files into queryable tables, with no one babysitting them.
        </p>
        <div class="hero__cta">
          <a class="btn btn--primary" href="#experience">View my work</a>
          <a class="btn" href="#contact">Get in touch</a>
        </div>
        <ul class="hero__stack" aria-label="Core technologies">
          <li style="--c: var(--accent)">.NET</li>
          <li style="--c: var(--teal)">Python</li>
          <li style="--c: var(--coral)">Angular</li>
          <li style="--c: var(--signal)">SQL Server</li>
          <li style="--c: var(--violet)">Azure</li>
        </ul>
      </div>
    </section>
  `,
  styles: `
    .hero { padding-block: clamp(64px, 10vw, 140px) clamp(64px, 9vw, 120px); }
    .hero__role { color: var(--muted); font-weight: 500; margin-bottom: 20px; }
    h1 { font-size: clamp(2.8rem, 7.4vw, 6rem); font-weight: 800; letter-spacing: -.035em; line-height: 1.02; max-width: 15ch; }
    .hero__lead { margin-top: 28px; max-width: 54ch; font-size: 1.2rem; color: var(--muted); }
    .hero__cta { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 36px; }
    .hero__stack { display: flex; flex-wrap: wrap; gap: 10px; list-style: none; margin: 48px 0 0; padding: 0; }
    .hero__stack li {
      display: inline-flex; align-items: center; gap: 8px; padding: 6px 16px 6px 12px;
      border: 1px solid var(--line); border-radius: 999px; background: var(--surface); font-weight: 500;
    }
    .hero__stack li::before { content: ''; width: 10px; height: 10px; border-radius: 50%; background: var(--c); }
  `,
})
export class Hero {
  readonly p = PROFILE;
}
