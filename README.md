# Café Palace website

Next.js 16 · React 19 · Tailwind CSS 4 · TypeScript — fully static, perfect for Vercel Hobby.

## Edit your content
Everything editable is in `data/`:
- `site.ts` — phone, email, social links, truck location & hours, **YouTube video URLs**, kosher certificate details.
  Leave a value as `""` and it is hidden on the site.
- `menu.ts` — dishes and prices.
- Images live in `public/images/`. Put a kosher certificate in `public/kosher/` and reference it in `site.ts`.

## Run locally
```bash
npm install
npm run dev      # http://localhost:3000
```

## Deploy to Vercel (Hobby)
**Option A – GitHub (recommended)**
1. Create a new GitHub repo and push this folder (`git init && git add . && git commit -m "Café Palace" && git remote add origin <url> && git push -u origin main`).
2. In Vercel: **Add New → Project → Import** the repo. Framework is auto-detected as Next.js. Click **Deploy**.
3. Every future `git push` redeploys automatically.

**Option B – CLI**
```bash
npm i -g vercel
vercel          # follow the prompts
vercel --prod   # publish to production
```
Add your own domain later in Project → Settings → Domains.
