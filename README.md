# PRP

Starter web application for PRPilot workflows.

## Stack

- Node.js + Express
- Static frontend (HTML/CSS/JS)

## Run locally

```bash
npm install
npm start
```

Open http://localhost:3000

## Planned features

- Google OAuth login
- JWT session handling
- Logout

## Logout

Implemented a **POST /api/v1/auth/logout** endpoint that clears the JWT session cookie/token and returns `{ "ok": true }`. The landing page header shows a **Log out** button when a user session is present. Clicking the button calls the logout API, clears any client‑side auth state, and redirects to `/`. After logout, protected/session‑aware UI no longer treats the user as signed in.

---
