# Deployment guide: bhupendrayadav.co.in (Hostinger domain + Angular app)

Aapka domain `bhupendrayadav.co.in` Hostinger par hai (Active, auto-renew ON, expiry 2027-10-04).
Domain sirf "address" hai. Website files kahin host karni hongi. Do practical raste hain.

## Which hosting should you pick?

| Option | Cost | Effort | Verdict |
|---|---|---|---|
| **Cloudflare Pages / Netlify / Vercel** (connect GitHub repo) | Free | Low | **Recommended.** Auto-deploy on every `git push`, free SSL, global CDN. |
| Firebase Hosting | Free tier | Medium | Good, needs Firebase CLI. |
| GitHub Pages | Free | Medium | Works, but SPA fallback and custom domain need extra care. |
| Hostinger Shared/Web Hosting | Paid plan needed | Low | Choose only if you already own (or want) a Hostinger hosting plan. Your screenshot shows only a domain, no hosting plan. |

Neeche **Path A (Netlify, free, recommended)** aur **Path B (Hostinger Web Hosting)** dono diye hain.
DNS Hostinger mein hi rakhna hai (Nameservers change nahi karne), sirf records add karne hain.

---

## Step 1: Build the production files

```bash
npm install
npx ng build --configuration production
```

Output folder: `dist/portfolio/browser/` (isi folder ke andar `index.html`, `.js`, `.css`, `.htaccess`, resume file hoti hai).

Local test:

```bash
npx http-server dist/portfolio/browser -p 8080
```

---

## Path A: Netlify (free) + Hostinger DNS

### A1. Push code to GitHub
```bash
git init
git add .
git commit -m "Portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/portfolio.git
git push -u origin main
```

### A2. Create the Netlify site
1. netlify.com, sign up with GitHub, **Add new site, Import an existing project**.
2. Pick the repo. Settings:
   - Build command: `npm run build`
   - Publish directory: `dist/portfolio/browser`
3. Deploy. Aapko `something.netlify.app` URL milega. Open karke check karo.
4. SPA fallback ke liye repo root mein `public/_redirects` file add karo (optional, kyunki ye site single page hai):
   `/*  /index.html  200`

### A3. Add your custom domain in Netlify
Site settings, **Domain management, Add a domain**, enter `bhupendrayadav.co.in`. Netlify batayega kaunse records chahiye. Usually:

| Type | Name | Value |
|---|---|---|
| A | `@` | `75.2.60.5` (Netlify load balancer; Netlify dashboard mein jo dikhe wahi use karo) |
| CNAME | `www` | `<your-site>.netlify.app` |

### A4. Edit DNS in Hostinger
1. hPanel, **Domains, Domain portfolio**, apne domain ke saamne **Manage**.
2. Left menu mein **DNS / Nameservers, DNS records** (DNS Zone Editor).
3. **Delete conflicting records first:** existing `A` record for `@` (parking page ka IP) aur `CNAME` for `www` agar hai. Same name par do A/CNAME conflict karte hain. `MX` aur `TXT` records (email ke liye) mat chhedo.
4. Add record:
   - Type `A`, Name `@`, Points to = Netlify IP, TTL `3600`. Save.
   - Type `CNAME`, Name `www`, Target = `<your-site>.netlify.app` (end mein dot nahi dalna zaroori nahi, Hostinger khud handle karta hai). Save.
5. Nameservers: **Hostinger ke default nameservers hi rehne do** (`ns1.dns-parking.com`, `ns2.dns-parking.com`). Sirf tab change karo jab aap DNS Cloudflare/Netlify ko dena chaho.

### A5. HTTPS
Netlify mein **Domain management, HTTPS, Verify DNS configuration, Provision certificate** (Let's Encrypt, free). DNS propagate hone ke baad 1 se 10 minute mein certificate lag jata hai. **Force HTTPS** ON rakho.

---

## Path B: Hostinger Web Hosting (Premium/Business plan)

Domain ke saath Hostinger hosting plan chahiye (domain-only mein File Manager nahi hota). Agar plan hai:

### B1. Add the domain to the hosting plan
hPanel, **Websites, Add website**, **Custom/Empty website**, existing domain `bhupendrayadav.co.in` choose karo. Hostinger DNS records khud sahi kar deta hai (A record hosting server IP par, aur domain Hostinger nameservers par).

### B2. Upload files
1. hPanel, **Websites, Dashboard, File Manager**, folder `public_html`.
2. `public_html` ke andar jo default `default.php` / purani files hain, delete karo.
3. `dist/portfolio/browser/` ke **andar ki saari files** (folder nahi, uski contents) upload karo. Hidden file `.htaccess` bhi upload honi chahiye (File Manager settings mein "show hidden files" ON karo). Easy tareeka: contents ka zip banao, upload karo, **Extract**.
4. Resulting layout: `public_html/index.html`, `public_html/main-xxxx.js`, `public_html/.htaccess`.

Alternative: FTP (hPanel, **Files, FTP Accounts**) se FileZilla use karke same files `public_html` mein daalo.

### B3. DNS check (only if you changed it before)
hPanel, **Domains, Manage, DNS records**:

| Type | Name | Value |
|---|---|---|
| A | `@` | Hosting server IP (hPanel, Hosting, Dashboard mein "IP address" dikhta hai) |
| CNAME | `www` | `bhupendrayadav.co.in` |

Nameservers: Hostinger ke hi (`ns1.dns-parking.com`, `ns2.dns-parking.com`) hone chahiye.

### B4. Free SSL on Hostinger
1. hPanel, **Websites, Manage** (apni site), left menu **Security, SSL**.
2. Domain ke saamne **Install SSL** (free Let's Encrypt / Hostinger SSL). Premium/Business plans mein ye auto-install bhi ho jata hai.
3. Install hone par status **Active**. Fir **Force HTTPS** toggle ON karo.
4. Hamari `.htaccess` mein already HTTPS redirect aur `www` se non-`www` redirect hai, to dono layers kaam karenge.

---

## Verify and troubleshoot

- DNS propagation: usually 5 se 30 minute, kabhi kabhi 24 ghante tak. Check: https://dnschecker.org (A record for `bhupendrayadav.co.in`).
- Terminal check: `nslookup bhupendrayadav.co.in`
- Browser mein old parking page dikhe: cache clear karo ya Incognito window use karo.
- "Not secure" warning: SSL abhi issue nahi hua, 10 se 15 minute wait karke dobara SSL install/provision karo.
- Blank page: confirm karo ki `index.html` seedha `public_html` ke andar hai, `browser/` subfolder ke andar nahi.
- `.co.in` domains ke liye kabhi kabhi registrant email verification pending hota hai. Hostinger se aaye verification email ko confirm karo, warna domain suspend ho sakta hai.

## Before you go live: content checklist

Edit `src/app/data/portfolio.data.ts`:
- `linkedin` and `github` URLs (khali hain, isliye site par hidden hain).
- Project `github` / `demo` links jahan applicable ho (Teleperformance projects confidential ho sakte hain, unke links mat daalo).
- `formEndpoint`: https://formspree.io par free form banao aur URL paste karo. Khali rakhoge to form visitor ka email app khol dega.
- Resume: site par `public/Bhupendra_Yadav_Resume.pdf` serve hota hai (confidential naam hataya hua public version). Update karni ho to isi naam se PDF replace karo. Original NDA-wali resume repo mein kabhi commit mat karna.
- Projects confidentiality: `portfolio.data.ts` mein sirf generic titles aur high-level impact likho. Client ya internal tool ke naam, real metrics, schemas, internal URLs aur source code kabhi nahi.
- GitHub/demo links sirf personal ya open-source projects ke daalo.
