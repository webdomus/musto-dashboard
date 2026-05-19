# Musto Calzature — Check post-migrazione HTTP→HTTPS

**Data esecuzione:** 28 aprile 2026
**Periodo GSC analizzato:** 31 mar – 26 apr 2026 vs 3 mar – 30 mar 2026 (28d vs 28d)
**Property GSC:** `sc-domain:mustocalzature.com`

> ⚠️ **Caveat temporale.** Il task era programmato per essere eseguito ~3 settimane dopo la chiusura della segnalazione (28 aprile). Sta invece girando **lo stesso giorno** della verifica tecnica. Di conseguenza i dati GSC qui sotto fotografano la situazione **pre-/contemporanea** alla chiusura, non il consolidamento post-migrazione, che richiede 2–6 settimane per essere visibile in modo affidabile. Riprogrammare un secondo check intorno al **20 maggio 2026** per misurare l'effettivo consolidamento.

---

## 🚦 Status semaforico

| Area | Stato | Note |
|---|---|---|
| (a) Consolidamento GSC | 🟡 | Trend traffico in crescita, nessuna degradazione visibile, ma finestra troppo corta per dichiarare il consolidamento concluso |
| (b) Tecnica Shopify (redirect/canonical) | 🟢 | Confermata corretta il 28 apr; richiesto re-check con i 4 curl |
| (c) Google Business Profile | 🟡 | Aggiornamento URL → richiede conferma manuale di Carmine |

---

## 📊 Dati GSC — confronto periodo su periodo

| Metrica | 31 mar – 26 apr | 3 mar – 30 mar | Δ assoluto | Δ % |
|---|---:|---:|---:|---:|
| Click | 4.546 | 3.952 | +594 | **+15,0 %** |
| Impressioni | 358.602 | 291.735 | +66.867 | **+22,9 %** |
| CTR medio | 1,27 % | 1,35 % | −0,08 pp | −5,9 % |
| Posizione media | 8,14 | 8,06 | +0,08 | sostanzialmente stabile |

**Lettura:** crescita sana di click e impressioni. Il CTR cala leggermente perché crescono di più le impressioni (più query intercettate, anche su long-tail). Posizione media sostanzialmente piatta — nessun segnale di penalizzazione o de-indicizzazione legata alla migrazione.

### Trend giornaliero ultimi 12 giorni

| Giorno | Click | Impr. | Posizione |
|---|---:|---:|---:|
| 15 apr | 141 | 13.002 | 8,33 |
| 16 apr | 179 | 13.072 | 8,35 |
| 17 apr | 170 | 14.035 | 8,58 |
| 18 apr | 208 | 16.100 | 7,98 |
| 19 apr | 229 | 17.867 | 7,78 |
| 20 apr | 217 | 15.431 | 8,26 |
| 21 apr | 191 | 17.141 | 9,62 |
| 22 apr | 187 | 15.683 | 8,85 |
| 23 apr | 167 | 14.224 | 8,28 |
| 24 apr | 183 | 14.804 | 8,22 |
| 25 apr | 195 | 15.899 | 8,21 |
| **26 apr** | **252** | **17.976** | **7,81** |

Picco il 26 aprile (giorno migliore della finestra), nessuna anomalia. Posizione media in lieve miglioramento sul finale.

---

## 🔍 URL con `http://` in GSC

**Risultato del controllo automatico:** la property `sc-domain` aggrega su tutti i protocolli e Google riporta l'URL canonico indicizzato. Nei dati restituiti per `page` dimension nelle ultime 24h compare la variante `http://mustocalzature.com` — ma è atteso in fase di transizione e va monitorato nel tempo per verificarne il calo.

**Azione:** verificare nel **prossimo run (20 maggio)** che la quota di click/impressioni con prefisso `http://` sia in calo netto verso zero. In Search Console UI il modo più rapido è: *Performance → Pages → filtro URL "contiene http://"*.

---

## 🛠️ Re-check tecnico (rilanciare i 4 curl)

Da rilanciare in terminale, devono ancora dare tutti **301 → `https://mustocalzature.com/`** con canonical pulito:

```bash
curl -sI -L http://mustocalzature.com/      | grep -E "HTTP|location"
curl -sI -L http://www.mustocalzature.com/  | grep -E "HTTP|location"
curl -sI -L https://www.mustocalzature.com/ | grep -E "HTTP|location"
curl -s     https://mustocalzature.com/     | grep -i "canonical"
```

Atteso:
- Tutti i 3 input non-canonici → `301` con `location: https://mustocalzature.com/`
- L'ultimo: `<link rel="canonical" href="https://mustocalzature.com/" />`

---

## 📍 Google Business Profile — azione residua

Il 28 apr era ancora aperta come **azione critica** la correzione dell'URL su GBP da `http://mustocalzature.com` a `https://mustocalzature.com/`.
**Da confermare:** aggiornamento effettuato? In caso negativo, farlo ora — è l'unico segnale esterno che può alimentare ancora la versione `http://` del dominio.

---

## ✅ Azioni residue

1. **Carmine:** rilanciare i 4 curl sopra (5 minuti) e confermare che i risultati sono ancora ok.
2. **Carmine:** confermare aggiornamento URL su Google Business Profile.
3. **Riprogrammare** un secondo check a **20 maggio 2026** (3 settimane reali post-verifica) per misurare il consolidamento effettivo: Top URL per click, presenza residua di prefissi `http://`, andamento posizione media sulle keyword principali.

**Conclusione provvisoria:** la transizione è chiusa lato tecnica. Lato segnali di Google il quadro è sano (traffico in crescita, posizione stabile) ma è **prematuro dichiarare il consolidamento concluso** — serve un secondo passaggio a 3 settimane di distanza.

---

*Fonte dati: Google Search Console — property `sc-domain:mustocalzature.com`, query del 28 apr 2026.*
