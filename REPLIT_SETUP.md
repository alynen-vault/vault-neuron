# Vault Neuron — Replit Setup Guide

## Getting live in 5 minutes

### Step 1 — Create a new Replit
1. Go to replit.com and sign in (free account is fine)
2. Click **+ Create Repl**
3. Choose **React.js** as the template
4. Name it `vault-neuron`
5. Click **Create Repl**

### Step 2 — Replace the files
Replit will create some starter files. Replace them with the files in this zip:

Delete everything in the `src/` folder Replit created, then upload:
- `src/index.js`
- `src/App.js`
- `src/tokens.js`
- `src/Nav.js`
- `src/HomePage.js`
- `src/SolutionsPage.js`
- `src/AboutPage.js`
- `src/VaultPage.js`
- `src/AssessmentPage.js`

Replace `public/index.html` with the one in this zip.

Replace `package.json` with the one in this zip.

### Step 3 — Run it
Click the green **Run** button. Replit installs dependencies and starts the site.
You'll get a live URL like: `https://vault-neuron.yourname.repl.co`

That's your shareable link.

### Step 4 — Point your Hostinger domain to it
In Hostinger:
1. Go to **Domains** → your domain → **DNS / Nameservers**
2. Add a CNAME record:
   - Name: `@` (or `www`)
   - Value: `vault-neuron.yourname.repl.co`

Or use Replit's custom domain feature (Replit Core plan, ~$7/month) to connect
`vaultneuron.com` directly inside Replit settings.

---

## How to update the site content

Every page has a clearly marked **EDITABLE SECTION** at the top of the file.
You never need to touch the styling or layout code.

| To update... | Edit this file |
|---|---|
| Homepage headline, pain points | `src/HomePage.js` |
| Services and deliverables | `src/SolutionsPage.js` |
| Bio and career timeline | `src/AboutPage.js` |
| Blog posts | `src/VaultPage.js` — copy a post block and fill it in |
| Assessment questions | `src/AssessmentPage.js` |
| Colors, fonts | `src/tokens.js` |
| Nav links, footer | `src/Nav.js` |

---

## How to use Claude to update the site

Paste this prompt to Claude when you want to make a change:

> "Here is the current content of [FILENAME]. Please update it to [describe your change].
> Keep all the styling and structure exactly the same — only change the content inside
> the EDITABLE SECTION."

Then paste the file contents. Claude will return the updated file ready to paste into Replit.

### Example — adding a blog post:
> "Here is my current VaultPage.js. Please add a new blog post titled
> 'How Tariffs Are Hitting Industrial Distributors in 2026' with a 2-sentence excerpt
> about price volatility. Tag it 'Pricing Architecture', color teal, date April 2026."

### Example — updating homepage pain points:
> "Here is my current HomePage.js. Please replace the pain points list with these
> five new ones: [your list]. Keep everything else the same."

---

## File structure overview

```
vault-neuron/
├── public/
│   └── index.html          ← page title, meta description
├── src/
│   ├── index.js            ← entry point (don't touch)
│   ├── App.js              ← page router (don't touch)
│   ├── tokens.js           ← colors, shared components
│   ├── Nav.js              ← navigation + footer
│   ├── HomePage.js         ← home page content
│   ├── SolutionsPage.js    ← solutions/services content
│   ├── AboutPage.js        ← about/bio content
│   ├── VaultPage.js        ← blog posts
│   └── AssessmentPage.js   ← assessment questions + scoring
└── package.json
```
