import { Component } from '@angular/core';
import { PROFILE } from '../data/portfolio.data';

@Component({
  selector: 'app-hero',
  template: `
    <section class="hero" id="top">
      <div class="wrap hero__grid">
        <div class="hero__copy">
          <p class="hero__role">{{ p.title }} · {{ p.location }}</p>
          <h1>I build the systems that move enterprise data.</h1>
          <p class="hero__lead">
            Ten years of .NET, Python and Angular. From telecom automation to ingestion pipelines
            that turn raw CSV files into queryable tables, with no one babysitting them.
          </p>
          <div class="hero__cta">
            <a class="btn btn--primary" href="#projects">View my work</a>
            <a class="btn" href="#contact">Get in touch</a>
          </div>
        </div>

        <figure class="pipe" aria-label="Diagram: a CSV file is converted to Parquet and loaded into a SQL table">
          <svg viewBox="0 0 420 460" role="img" aria-hidden="true">
            <!-- rails -->
            <path class="rail" d="M70 80 V170 M70 250 V340" />
            <path class="rail rail--flow" d="M70 80 V170 M70 250 V340" />
            <!-- nodes -->
            <g class="node">
              <rect x="20" y="20" width="380" height="60" rx="14" />
              <text x="44" y="57">orders_2024.csv</text>
              <text x="380" y="57" text-anchor="end" class="node__meta">raw upload</text>
            </g>
            <g class="node node--mid">
              <rect x="20" y="170" width="380" height="80" rx="14" />
              <text x="44" y="204">orders_2024.parquet</text>
              <text x="44" y="230" class="node__meta">compressed, on Azure Storage</text>
            </g>
            <g class="node">
              <rect x="20" y="340" width="380" height="100" rx="14" />
              <text x="44" y="374">dbo.Orders</text>
              <g class="cols">
                <rect x="44" y="392" width="70" height="10" rx="5" />
                <rect x="124" y="392" width="110" height="10" rx="5" />
                <rect x="244" y="392" width="60" height="10" rx="5" />
                <rect x="44" y="412" width="110" height="10" rx="5" />
                <rect x="164" y="412" width="70" height="10" rx="5" />
              </g>
            </g>
            <!-- packets -->
            <circle class="packet p1" cx="70" cy="80" r="7" />
            <circle class="packet p2" cx="70" cy="80" r="7" />
            <circle class="packet p3" cx="70" cy="250" r="7" />
            <circle class="packet p4" cx="70" cy="250" r="7" />
          </svg>
          <figcaption>Schema detected. Table created. Zero manual steps.</figcaption>
        </figure>
      </div>
    </section>
  `,
  styles: `
    .hero { padding-block: clamp(48px, 8vw, 110px) clamp(56px, 8vw, 100px); }
    .hero__grid { display: grid; grid-template-columns: 1.15fr .85fr; gap: clamp(32px, 6vw, 80px); align-items: center; }
    .hero__role { color: var(--muted); font-weight: 500; margin-bottom: 20px; }
    h1 { font-size: clamp(2.6rem, 6.4vw, 5rem); font-weight: 800; letter-spacing: -.035em; line-height: 1.02; }
    .hero__lead { margin-top: 24px; max-width: 52ch; font-size: 1.2rem; color: var(--muted); }
    .hero__cta { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 36px; }

    .pipe { margin: 0; }
    .pipe svg { width: 100%; height: auto; display: block; }
    .pipe figcaption { margin-top: 10px; color: var(--muted); font-size: .95rem; }
    .node rect { fill: var(--surface); stroke: var(--line); stroke-width: 1.5; }
    .node--mid rect { stroke: var(--accent); stroke-width: 2; }
    .node text { fill: var(--ink); font: 600 17px var(--font-body); }
    .node .node__meta { fill: var(--muted); font-weight: 400; font-size: 14px; }
    .cols rect { fill: var(--surface-2); stroke: none; }
    .rail { stroke: var(--line); stroke-width: 3; fill: none; stroke-linecap: round; }
    .rail--flow { stroke: var(--accent); stroke-dasharray: 4 12; animation: flow 1.2s linear infinite; }
    .packet { fill: var(--signal); }
    .p1 { animation: drop1 3.2s ease-in-out infinite; }
    .p2 { animation: drop1 3.2s ease-in-out 1.6s infinite; }
    .p3 { animation: drop2 3.2s ease-in-out infinite; }
    .p4 { animation: drop2 3.2s ease-in-out 1.6s infinite; }
    @keyframes flow { to { stroke-dashoffset: -16; } }
    @keyframes drop1 { 0% { transform: translateY(0); opacity: 0; } 15% { opacity: 1; } 85% { opacity: 1; } 100% { transform: translateY(90px); opacity: 0; } }
    @keyframes drop2 { 0% { transform: translateY(0); opacity: 0; } 15% { opacity: 1; } 85% { opacity: 1; } 100% { transform: translateY(90px); opacity: 0; } }

    @media (max-width: 900px) {
      .hero__grid { grid-template-columns: 1fr; }
      .pipe { max-width: 440px; }
    }
  `,
})
export class Hero {
  readonly p = PROFILE;
}
