# Sito della Scuola dell'infanzia Pio XII, Rovigo

Sito statico costruito con [Astro](https://astro.build), contenuti modificabili da un pannello (Sveltia CMS, compatibile con Decap CMS) e pubblicazione automatica su GitHub Pages.

URL: <https://scuola-infanzia-pioxii-rovigo.github.io/>

Le scelte fatte e i motivi sono in [`docs/DECISIONI.md`](docs/DECISIONI.md), con l'elenco di ciò che resta da fare.

## Come funziona

1. Chi aggiorna il sito entra su `/admin/`, modifica testi o foto e salva.
2. Il salvataggio crea un commit nel repository (i contenuti vivono in `src/content/`, le foto in `src/assets/uploads/`).
3. GitHub Actions (`.github/workflows/deploy.yml`) ricostruisce il sito e lo pubblica in circa un minuto.

Se una modifica rende la build non valida, la pubblicazione si ferma e il sito online resta quello precedente.

## Sviluppo

Serve Node 22.12 o successivo.

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # genera dist/
```

## Struttura

| Percorso | Cosa contiene |
| --- | --- |
| `src/content/pagine/` | Testi di Home e Storia e Volti |
| `src/content/progetti/` | Un file per progetto |
| `src/content/persone/` | Un file per persona |
| `src/content/impostazioni/sito.json` | Contatti, orari, social |
| `src/assets/uploads/` | Foto (ottimizzate automaticamente in build) |
| `public/admin/config.yml` | Configurazione del pannello di modifica |
| `src/styles/global.css` | Tutto lo stile del sito |

Lo schema dei contenuti è in `src/content.config.ts`: se cambia un campo va aggiornato anche `public/admin/config.yml`.

## Accesso al pannello `/admin/`

Il login "Accedi con GitHub" è attivo: chi accede deve avere un account GitHub con permesso di scrittura su questo repository (aggiungerlo dalle impostazioni dell'organizzazione).

Come funziona dietro le quinte: un piccolo servizio ([sveltia-cms-auth](https://github.com/sveltia/sveltia-cms-auth)) pubblicato su Cloudflare Workers all'indirizzo `https://sveltia-cms-auth.scuolainfanzia-ro.workers.dev` fa da tramite con una OAuth App GitHub registrata nell'organizzazione ("Accesso al pannello del sito"). Client ID e Client Secret sono impostati come variabili del Worker su Cloudflare, non nel repository. Resta comunque disponibile "Accedi con Token di Accesso" come alternativa.

## Foto e privacy

Le foto delle insegnanti e della scuola provengono dal precedente sito Squarespace. Prima di mantenerle online conviene confermare con la scuola il consenso alla pubblicazione. Il repository è pubblico (necessario per GitHub Pages gratuito, non può essere reso privato senza un piano a pagamento): tutto ciò che vi viene caricato è visibile a chiunque. Non caricare foto di bambini senza le liberatorie necessarie.

I testi originali provengono da <https://pioxii.squarespace.com/> (raccolti il 16 settembre 2026, con lievi correzioni di refusi) e vanno confermati dalla scuola.
