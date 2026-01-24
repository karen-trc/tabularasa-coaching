# CLAUDE.md - Projektrichtlinien für Claude Code

## Projektübersicht

Tabularasa Coaching - Eine Next.js Website für Coaching-Dienstleistungen.

## Technologie-Stack

- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **Sprache**: TypeScript/JavaScript

## Entwicklungsrichtlinien

### Branching-Strategie

- Der Haupt-Branch ist `main`
- Claude-Entwicklungsbranches folgen dem Muster `claude/**`
- Branches mit dem Präfix `claude/` werden automatisch nach `main` gemergt und gelöscht

### Auto-Merge Workflow

Dieses Projekt verwendet einen automatischen Merge-Workflow für Claude-Branches:
- Trigger: Push zu `claude/**` Branches
- Aktion: Automatischer Merge zu `main` mit `--no-ff`
- Nach dem Merge wird der Branch automatisch gelöscht
- Commits werden als `github-actions[bot]` ausgeführt

### Code-Konventionen

- Verwende TypeScript wo möglich
- Folge den bestehenden Coding-Patterns im Projekt
- Schreibe aussagekräftige Commit-Messages auf Deutsch oder Englisch
- Teste Änderungen lokal bevor du pushst

### Wichtige Verzeichnisse

- `/src` - Hauptquellcode
- `/public` - Statische Assets
- `/.github/workflows` - GitHub Actions Workflows

## Deployment

Das Projekt wird automatisch deployed wenn Änderungen zu `main` gepusht werden.
Vercel URL: https://tabularasa-coaching.vercel.app

---

## Ausstehende Aufgaben (Stand: Januar 2025)

### Kontaktformular E-Mail-Versand (wartet auf DNS-Zugang von Karen)

Das Kontaktformular ist technisch fertig implementiert mit Resend. Es fehlt nur noch die Konfiguration:

1. **DNS-Records bei Domain-Provider eintragen:**
   - Karen muss DNS-Zugang gewähren
   - Im Resend Dashboard unter "Domains" die Records abrufen (SPF, DKIM, DMARC)
   - Records beim Domain-Provider hinzufügen

2. **Resend API-Key konfigurieren:**
   - API-Key von https://resend.com/api-keys holen
   - Lokal in `.env.local`: `RESEND_API_KEY=re_xxx`
   - In Vercel: Project Settings → Environment Variables → `RESEND_API_KEY`

### Relevante Dateien für E-Mail-Funktion

- `app/api/contact/route.ts` - API-Route für E-Mail-Versand
- `app/contact/page.tsx` - Kontaktformular (bereits mit API verbunden)
- `.env.local` - Lokale Umgebungsvariablen (Platzhalter vorhanden)

### Technische Hinweise

- E-Mails werden an karen@tabularasacoaching.com gesendet
- Absender: noreply@tabularasacoaching.com (nach DNS-Verifizierung)
- Dev Server läuft oft auf Port 3001 (Port 3000 belegt)
