# Decisioni di progetto

Registro delle scelte fatte per il sito e dei motivi. Da aggiornare a ogni cambio di rotta.

## Contesto

Il sito Squarespace precedente non veniva aggiornato dalle insegnanti, non era indicizzato e comportava un canone annuale. Obiettivi del rifacimento: costo ricorrente zero, aspetto moderno e sobrio, modifica dei contenuti possibile a chi non programma, nessuna dipendenza da un singolo sviluppatore.

## Scelte

| # | Argomento | Scelta | Perché | Data |
| --- | --- | --- | --- | --- |
| 1 | Framework | Astro (sito statico) | Il sito è solo contenuto: pagine veloci, zero JavaScript inutile. Next.js sarebbe sovradimensionato. | 2026-09-21 |
| 2 | Contenuti | File JSON in `src/content/`, foto in `src/assets/uploads/` | Nessun database, tutto versionato nel repo, ottimizzazione automatica delle immagini in build. | 2026-09-21 |
| 3 | Pannello di modifica | Sveltia CMS su `/admin/` (configurazione compatibile con Decap CMS) | Nessun servizio a pagamento, interfaccia in italiano, usabile da telefono. Decap ha manutenzione lenta; la stessa configurazione funziona con entrambi. | 2026-09-21 |
| 4 | Hosting e pubblicazione | GitHub Pages + GitHub Actions | Gratuito, nessun account esterno per il sito. Ogni salvataggio del CMS ripubblica in circa 40 secondi. | 2026-09-21 |
| 5 | Proprietà | GitHub Organization `scuola-infanzia-pioxii-rovigo` (piano Free) | Il repo non dipende da un account personale. Per passare la gestione alla scuola basta aggiungere un Owner con una loro utenza e poi uscire. Deve sempre restare almeno un Owner. | 2026-09-21 |
| 6 | Dominio | Scelto `pioxiirovigo.it`, **da acquistare nei prossimi giorni** (verificato libero sul registro `.it` il 2026-10-17). Fino all'acquisto si usa `scuola-infanzia-pioxii-rovigo.github.io`. | Corto, chiaro, contiene nome e città. Il certificato HTTPS è gratuito e automatico su GitHub Pages: al checkout rifiutare l'SSL a pagamento proposto dal registrar. Rinominare l'organizzazione cambierebbe l'URL github.io. Il dominio va rinnovato ogni anno (idealmente con rinnovo automatico), perché è scritto sui cartelloni stampati. | 2026-10-17 |
| 7 | Chi può modificare | Serve un account GitHub (gratuito) con permesso di scrittura sul repo. Consigliato un solo account condiviso della scuola. | Il CMS salva direttamente nel repository. | 2026-09-21 |
| 8 | Accesso al CMS | Login "Accedi con GitHub" attivo, tramite proxy OAuth su **Cloudflare Workers** ([sveltia-cms-auth](https://github.com/sveltia/sveltia-cms-auth), account Cloudflare `scuolainfanzia.ro@libero.it`) all'indirizzo `sveltia-cms-auth.scuolainfanzia-ro.workers.dev`, con una OAuth App GitHub ("Accesso al pannello del sito") registrata nell'organizzazione. Resta disponibile anche "Accedi con Token di Accesso". | GitHub non permette il login OAuth dal solo browser, serve un piccolo servizio. Scelto Cloudflare al posto di Render: l'account è intestato alla scuola fin da subito e non ha avvii lenti. Render (già usato per Masarà) avrebbe legato il servizio all'account personale del referente. | 2026-09-23 |
| 9 | Link al pannello | Link "Accesso riservato" nel footer verso `/admin/`, con `rel="nofollow"`, escluso da `robots.txt` | Le insegnanti trovano il login senza conoscere l'indirizzo. | 2026-09-21 |
| 10 | Foto | Usate solo foto reali già pubblicate sul vecchio sito: facciata, ritratti del personale, due foto della pagina Storia. Le 12 foto dei "Progetti" erano immagini stock e non sono state riprese. | Le foto generiche non rappresentano la scuola. | 2026-09-21 |
| 11 | Repository pubblico | Il repo resta pubblico | GitHub Pages gratuito funziona solo con repo pubblici. Renderlo privato spegnerebbe il sito, salvo passare a un piano GitHub a pagamento (Team) o spostare l'hosting (ad esempio su Cloudflare Pages, che supporta repo privati). Tutto ciò che è nel repo è già visibile sul sito. | 2026-09-21 |
| 12 | Privacy | Nessun cookie, nessuno strumento di tracciamento, nessun font o script di terze parti nelle pagine pubbliche | Nessun banner cookie necessario. Unica eccezione: `/admin/` carica il CMS da unpkg.com. | 2026-09-21 |
| 13 | Verifica login e salvataggio | Testato con un vero account GitHub: login OAuth, modifica di un testo dal pannello, commit automatico, ripubblicazione. Tutto funzionante. | Era l'unico punto del flusso mai provato con un accesso reale. | 2026-09-23 |
| 14 | Cartellone in città (18 × 9,6 cm) | Grafica con nome della scuola, frase "Una scuola costruita insieme alle famiglie" (dall'home del sito), foto della facciata, due QR (sito `https://pioxiirovigo.it/` e pagina Facebook). Stessi colori e font del sito (Fraunces + Figtree, blu/arancio/giallo su carta). File di stampa fuori dal repo, nella cartella `~/cartellone-pio-xii` del referente. | Coerenza con il sito. I QR sono verificati leggibili anche a bassa risoluzione. I QR puntano a `https://` direttamente per evitare un reindirizzamento. | 2026-10-17 |

## Da fare

- Aggiungere gli account GitHub delle insegnanti all'organizzazione con permesso di scrittura sul repo.
- Confermare con la scuola testi e permesso di pubblicazione delle foto del personale.
- Registrare il sito su Google Search Console e inviare `sitemap-index.xml`.
- Acquistare `pioxiirovigo.it`, collegarlo a GitHub Pages (DNS + dominio personalizzato nel repo), attivare "Enforce HTTPS" e verificare che il sito risponda su `https://pioxiirovigo.it/`. **Solo dopo, mandare in stampa i cartelloni**: finché il dominio non è attivo il QR del sito non funziona.
- Valutare un indirizzo email associato al dominio.
- Quando la scuola sarà pronta: aggiungere un Owner dell'organizzazione con utenza della scuola.

## Regola sulle foto

Non caricare foto riconoscibili di bambini senza le liberatorie della scuola: il repository e il sito sono pubblici.
