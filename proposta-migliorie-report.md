# Musto Calzature · Proposta Migliorie Report Settimanale — Luglio 2026

> **Cliente:** Musto Calzature · mustocalzature.com
> **Team:** Web Domus
> **Data:** 12 Luglio 2026
> **Stato:** 🟡 Proposta — mockup in `report-settimanale-2026-W27-proposta.html`
> **Obiettivo:** rendere il report settimanale pienamente leggibile da un cliente non tecnico, senza cambiare dati, grafici o palette.

---

## Principio guida

Il report attuale è già ben impostato (commento editoriale, highlights, privacy sugli ordini). I punti che restano "da addetti ai lavori" sono i termini tecnici non spiegati (CTR, impressioni, posizione media), il confronto secco con la sola settimana precedente e la mancanza di takeaway in linguaggio piano. Il dashboard trimestrale usa già titoli discorsivi e note esplicative: la proposta porta lo stesso registro nel settimanale, così i due documenti parlano la stessa lingua.

**Il mockup usa esattamente i dati del W27 reale: nessun numero è stato ricalcolato.** Il diff tra `report-settimanale-2026-W27.html` e `report-settimanale-2026-W27-proposta.html` è quindi la specifica completa delle modifiche.

---

## Le 12 migliorie

### 1. Box "Come leggere questo report"
**Cosa cambia:** nuovo box (classe `.howto`) subito dopo l'header: cosa contiene il report, da dove vengono i numeri, cosa significa "vs W26", avvertenza sulla stagionalità delle settimane.
**Perché:** orienta chi apre il report per la prima volta (o lo inoltra a un collega) senza dover chiedere.
**Pipeline:** aggiungere il blocco fisso al template; solo il riferimento alla settimana precedente è dinamico.

### 2. Titoli di sezione in linguaggio piano + eyebrow tecnica
**Cosa cambia:** ogni sezione ha un occhiello tecnico (`.section-eyebrow`, es. "Google Search Console") e un titolo discorsivo:
| Prima | Dopo |
|---|---|
| KPI GA4 · Settimana W27 | **I numeri della settimana** |
| Shopify · Ordini e Fatturato W27 | **Le vendite online della settimana** |
| Canali di Acquisizione · Sessioni W27 | **Da dove arrivano i visitatori** |
| Google Search Console · Panoramica W27 | **La visibilità su Google** |
| *(sottosezione senza titolo)* | **Chi ci cerca per nome e chi ci scopre** |
| Top Keyword in Top 3 · W27 | **Parole chiave in prima pagina (posizione 1–3)** |
| Top Pagine per Click Organici | **Le pagine più trovate su Google** |
| Top Brand per Vendite · Ultime 4 Settimane | **I brand più venduti nell'ultimo mese** |
**Perché:** i titoli "La visibilità su Google" e "Da dove arrivano i visitatori" sono già usati nel trimestrale: coerenza tra report e zero gergo in apertura di sezione.
**Pipeline:** aggiornare la lista sezioni in SKILL.md (§ struttura HTML) con coppia eyebrow + titolo.

### 3. Frase esplicativa sotto ogni titolo
**Cosa cambia:** ogni sezione apre con una `.section-desc` di 1–2 frasi (pattern del trimestrale), es. per GSC: "Quante volte Musto è comparso nei risultati di Google, quante persone hanno cliccato e in quale posizione media".
**Perché:** chi legge sa cosa sta guardando prima di guardarlo.
**Pipeline:** le desc sono semi-fisse; solo i riferimenti a numeri/periodo cambiano.

### 4. Glossario a due livelli
**Cosa cambia:** (a) tooltip CSS-only (`.gloss`, nessun JavaScript) sui termini tecnici nelle etichette KPI — CTR, impressioni, posizione media, utenti/sessioni, spesa media; (b) box **"Piccolo glossario"** a fondo pagina con le stesse 7 definizioni in una riga ciascuna.
**Perché:** il tooltip serve sul desktop; il box serve su mobile (dove l'hover non esiste) e come riferimento stampabile.
**Pipeline:** glossario statico nel template; i tooltip sono `data-gloss` sugli span delle etichette.

### 5. Callout "In parole semplici"
**Cosa cambia:** box `.plain-box` con takeaway di una riga dopo le sezioni dense (numeri della settimana, canali, visibilità Google). Es.: *"Su 100 persone che vedono Musto nei risultati di Google, poco più di 1 clicca ed entra nel sito: il lavoro SEO serve ad alzare questo numero."*
**Perché:** trasforma le metriche in affermazioni verificabili dal cliente.
**Pipeline:** generati a ogni report insieme al commento editoriale (stesso registro).

### 6. Semaforo sui KPI
**Cosa cambia:** pallino verde/ambra/rosso (`.status-dot`) su ogni KPI card e GSC card, con legenda dichiarata sopra la griglia: verde = in miglioramento vs settimana precedente · ambra = stabile o da tenere d'occhio · rosso = in peggioramento.
**Perché:** lettura a colpo d'occhio; la legenda esplicita evita interpretazioni.
**Pipeline:** regola deterministica dal confronto WoW; la posizione media usa l'ambra quando l'arretramento è spiegato dalla crescita delle impressioni (regola già in uso nelle azioni-team).

### 7. Contesto a 5 settimane sulle barrette KPI
**Cosa cambia:** le barrette di confronto (`.kpi-compare`) passano da 2 barre (W26/W27) a 5 (W23→W27) su Utenti, Incasso e Click da Google. Serie reali usate nel mockup: utenti 3.495 / 3.547 / 3.034 / 2.945 / 3.654 · incasso € 1.997,20 / € 1.634,80 / € 1.411,70 / € 358,90 / € 1.564,90 · click 2.148 / 2.005 / 1.572 / 1.387 / 1.603.
**Perché:** il confronto secco con una sola settimana esagera i picchi e i crolli (la W26 da € 358,90 rendeva "eccezionale" qualsiasi W27); su 5 settimane la tendenza è onesta.
**Pipeline:** il generatore deve leggere i 4 report precedenti (o un file serie storiche) — è la modifica più strutturale della lista.

### 8. Posizione media: "più basso è, meglio è"
**Cosa cambia:** nota permanente accanto al KPI (`.gsc-note`: "Più basso è, meglio è · 7,95 ≈ prima pagina") e trend riscritto in parole ("era 7,58 in W26 · lieve arretramento", colore ambra) al posto della freccia rossa ▼ su un numero che sale.
**Perché:** è il numero più frainteso del report: una freccia giù rossa accanto a un valore che aumenta confonde chiunque non conosca la metrica.
**Pipeline:** template della card posizione + regola semaforo dell'item 6.

### 9. Colonne e stati tradotti
**Cosa cambia:** colonna "Pos." → **"Posizione su Google"**; nota sotto la tabella keyword ("posizione 1–3 = primi risultati della prima pagina"); stati ordine PAID/PENDING → **PAGATO / IN ATTESA DI PAGAMENTO**; "Revenue" → **"Incasso"**; "Ticket medio" → **"Spesa media per ordine"**; nomi canale tradotti ("Organic Search" → "Ricerca Google (organico)", "AI Assistant" → "Assistenti AI (ChatGPT…)").
**Perché:** nessun motivo per cui un negoziante debba leggere "PENDING" o "Paid Shopping".
**Pipeline:** dizionario di traduzione fisso nel template.

### 10. Sezione "Cosa faremo la prossima settimana"
**Cosa cambia:** nuova sezione finale con 2–3 azioni in versione client-safe (card `.step-card`), es. "riscriviamo titolo e descrizione della pagina Les Tropéziennes".
**Perché:** il cliente vede che il canone copre lavoro concreto, senza esporre i dettagli tecnici interni (coerente con la separazione introdotta dal commit `2fdd2a9`: azioni tecniche solo in azioni-team).
**Pipeline:** il generatore riprende le 2–3 azioni principali della azioni-team della settimana e le riscrive in linguaggio cliente.

### 11. Riga fonte sotto ogni grafico e tabella
**Cosa cambia:** `.source-note` sotto ogni blocco dati ("Fonte: Shopify", "Fonte: Google Search Console"…) e nota sulla maggiore precisione di Shopify rispetto a GA4 (pattern già usato nel trimestrale). "Revenue*" dei canali rinominato "Incasso stimato*" con la nota sull'attribuzione proporzionale.
**Perché:** il cliente capisce perché i numeri di GA4 e Shopify non coincidono mai, prima di chiederlo.
**Pipeline:** attributo fisso per blocco nel template.

### 12. Ribbon "PROPOSTA" (solo per il mockup)
**Cosa cambia:** banner ambra in cima al file mockup: "Mockup · Proposta di restyling — dati W27 reali, layout in valutazione".
**Perché:** il file non deve essere scambiato per il report ufficiale W27.
**Pipeline:** da **rimuovere** quando il layout verrà adottato per i report reali.

---

## Cosa NON cambia (intenzionalmente)

- **Nessun dato ricalcolato:** tutti i numeri del mockup coincidono con il W27 pubblicato.
- **Palette, font e identità Web Domus** (dark + oro, Playfair Display + Inter) invariati.
- **I 4 grafici Chart.js** invariati (stessi id canvas, stesse serie); cambiano solo alcune label di legenda (item 9).
- **Commento editoriale e highlights** invariati: erano già la parte più leggibile del report.
- **Formati numerici italiani** (`1.234,56` · `€ 1.564,90` · percentuali con virgola) invariati.
- **Il file `seo-dashboard.skill` non è stato modificato:** le istruzioni per la pipeline sopra vanno riportate in SKILL.md solo dopo l'approvazione del layout da parte del team/cliente.

## Percorso di adozione suggerito

1. Revisione interna del mockup (`report-settimanale-2026-W27-proposta.html`).
2. Eventuale condivisione con il cliente come anteprima ("dalla prossima settimana il report avrà questo formato").
3. Aggiornamento di SKILL.md (sezione struttura HTML + nuove regole: glossario, semaforo, serie a 5 settimane, dizionario traduzioni, sezione prossimi passi).
4. Primo report reale nel nuovo formato: W29 o W30.
5. Rimozione del ribbon PROPOSTA dal template e archiviazione di questo documento come "✅ Implementato".
