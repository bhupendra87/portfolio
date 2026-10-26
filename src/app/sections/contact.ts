import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PROFILE } from '../data/portfolio.data';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  template: `
    <section class="section" id="contact">
      <div class="wrap contact">
        <div>
          <h2 class="section__title">Let's talk</h2>
          <p class="section__lead">Have a project, a role or a hard data problem? Send a message and I will reply by email.</p>

          <ul class="details">
            <li><span>Email</span><a [href]="'mailto:' + p.email">{{ p.email }}</a></li>
            <li><span>Phone</span><a [href]="'tel:' + p.phone">{{ p.phone }}</a></li>
            <li><span>Location</span>{{ p.location }}</li>
            @if (p.linkedin) { <li><span>LinkedIn</span><a [href]="p.linkedin" target="_blank" rel="noopener">{{ p.linkedin }}</a></li> }
            @if (p.github) { <li><span>GitHub</span><a [href]="p.github" target="_blank" rel="noopener">{{ p.github }}</a></li> }
          </ul>
        </div>

        <form class="form" (ngSubmit)="send()" #f="ngForm">
          <label>Your name
            <input name="name" [(ngModel)]="name" required autocomplete="name" />
          </label>
          <label>Your email
            <input name="email" type="email" [(ngModel)]="email" required autocomplete="email" />
          </label>
          <label>Message
            <textarea name="message" rows="5" [(ngModel)]="message" required></textarea>
          </label>
          <button class="btn btn--primary" type="submit" [disabled]="f.invalid || sending()">
            {{ sending() ? 'Sending…' : 'Send message' }}
          </button>
          @if (status()) { <p class="form__status" role="status">{{ status() }}</p> }
        </form>
      </div>
    </section>
  `,
  styles: `
    .contact { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(32px, 6vw, 80px); }
    .details { margin-top: 32px; display: grid; gap: 14px; }
    .details li { display: grid; grid-template-columns: 90px 1fr; gap: 12px; word-break: break-word; }
    .details span { color: var(--muted); }
    .details a { text-decoration-color: var(--accent); text-underline-offset: 4px; }
    .form { display: grid; gap: 16px; padding: 28px; background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius); align-content: start; }
    label { display: grid; gap: 6px; font-weight: 500; font-size: .95rem; }
    input, textarea { font: 400 1rem var(--font-body); color: var(--ink); background: var(--bg); border: 1px solid var(--line); border-radius: 10px; padding: 12px 14px; width: 100%; resize: vertical; }
    input:focus, textarea:focus { outline: 2px solid var(--accent); border-color: var(--accent); }
    .btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
    .form__status { color: var(--muted); font-size: .95rem; }
    @media (max-width: 860px) { .contact { grid-template-columns: 1fr; } }
  `,
})
export class Contact {
  readonly p = PROFILE;
  name = '';
  email = '';
  message = '';
  readonly sending = signal(false);
  readonly status = signal('');

  async send() {
    if (!this.p.formEndpoint) {
      const body = `${this.message}\n\n${this.name} (${this.email})`;
      window.location.href =
        `mailto:${this.p.email}?subject=${encodeURIComponent('Portfolio enquiry from ' + this.name)}&body=${encodeURIComponent(body)}`;
      this.status.set('Opening your email app. If nothing opens, write to ' + this.p.email + '.');
      return;
    }
    this.sending.set(true);
    this.status.set('');
    try {
      const res = await fetch(this.p.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: this.name, email: this.email, message: this.message }),
      });
      if (!res.ok) throw new Error(String(res.status));
      this.status.set('Message sent. I will get back to you soon.');
      this.name = this.email = this.message = '';
    } catch {
      this.status.set('Message not sent. Check your connection or email ' + this.p.email + ' directly.');
    } finally {
      this.sending.set(false);
    }
  }
}
