import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const persone = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/persone' }),
  schema: z.object({
    nome: z.string(),
    ruolo: z.string(),
    foto: z.string(),
    ordine: z.number(),
  }),
});

const progetti = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/progetti' }),
  schema: z.object({
    titolo: z.string(),
    descrizione: z.string(),
    ordine: z.number(),
  }),
});

const pagine = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/pagine' }),
  schema: z.object({
    titolo: z.string(),
    sottotitolo: z.string().optional(),
    intro: z.string(),
    foto: z.string().optional(),
    fotoAlt: z.string().optional(),
    fatti: z.array(z.object({ valore: z.string(), etichetta: z.string() })).optional(),
    sezioni: z
      .array(
        z.object({
          titolo: z.string(),
          testo: z.string(),
          foto: z.string().optional(),
          fotoAlt: z.string().optional(),
          linkEtichetta: z.string().optional(),
          linkPercorso: z.string().optional(),
        }),
      )
      .optional(),
  }),
});

const impostazioni = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/impostazioni' }),
  schema: z.object({
    nome: z.string(),
    citta: z.string(),
    indirizzo: z.string(),
    cap: z.string(),
    telefoni: z.array(z.object({ etichetta: z.string(), numero: z.string() })),
    email: z.array(z.object({ etichetta: z.string(), indirizzo: z.string() })),
    apertura: z.string(),
    chiusura: z.string(),
    mappa: z.string().url(),
    social: z.array(z.object({ etichetta: z.string(), url: z.string().url() })),
    descrizione: z.string(),
  }),
});

export const collections = { persone, progetti, pagine, impostazioni };
