# Musto Calzature — Analytics Dashboard

Dashboard analytics per Musto Calzature, sviluppata da **Web Domus Digital Agency**.

## 📁 Struttura progetto

```
musto-dashboard/
├── index.html       # Dashboard principale
├── vercel.json      # Configurazione Vercel
└── README.md        # Questo file
```

---

## 🚀 Deploy su Vercel (prima volta)

### Prerequisiti
- Account GitHub: https://github.com
- Account Vercel: https://vercel.com (accedi con GitHub)

### Step 1 — Crea repository GitHub
```bash
git init
git add .
git commit -m "Initial dashboard deploy"
git branch -M main
git remote add origin https://github.com/TUO-USERNAME/musto-dashboard.git
git push -u origin main
```

### Step 2 — Importa su Vercel
1. Vai su https://vercel.com/new
2. Clicca **"Import Git Repository"**
3. Seleziona `musto-dashboard`
4. Clicca **Deploy** (le impostazioni sono già nel vercel.json)

✅ La dashboard sarà live su un URL tipo:
`https://musto-dashboard.vercel.app`

---

## 🌐 Aggiungere sottodominio personalizzato (es. musto.webdomus.it)

### Su Vercel
1. Vai nel progetto → **Settings → Domains**
2. Aggiungi `musto.webdomus.it`
3. Vercel ti fornirà un record CNAME

### Sul tuo DNS (Registrar/Cloudflare)
```
Tipo:   CNAME
Nome:   musto
Valore: cname.vercel-dns.com
```

Attesa propagazione: 5-30 minuti.

---

## 🔄 Aggiornare la dashboard

Ogni aggiornamento si fa in **2 comandi**:

```bash
git add index.html
git commit -m "Update dati GA4 - Marzo 2026"
git push
```

Vercel rileva il push e rideploya automaticamente in ~20 secondi.

---

## 🔒 Proteggere la dashboard con password (opzionale)

Se vuoi limitare l'accesso solo al cliente e al team, Vercel offre
**Password Protection** nel piano Pro (€20/mese) oppure puoi usare
una soluzione gratuita con Netlify o aggiungere un semplice
login HTML/JS direttamente nell'index.html.

---

## 📧 Inviare al cliente

Una volta live, condividi semplicemente il link:
`https://musto.webdomus.it`

Per condivisione periodica via email, puoi anche esportare
la dashboard come screenshot con strumenti come:
- https://screenshotone.com
- Estensione Chrome "Full Page Screenshot"

---

*Sviluppato da Web Domus Digital Agency*
