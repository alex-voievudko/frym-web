import type { WaitlistClient } from './types';
import { fakeClient } from './fake';

/**
 * THE BACKEND SWAP POINT.
 *
 * Wiring Supabase is this one assignment plus a new ./supabase.ts — no
 * component changes. Sketch of that client:
 *
 *   const db = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);
 *   join:   insert into `waitlist`; Postgres 23505 => 'already-joined'
 *   answer: insert into `waitlist_answers`
 *
 * Read credentials through `astro:env` (envField.string with context:
 * 'client', access: 'public'), not import.meta.env, so they are validated at
 * build time. The site stays output: 'static' — an anon key with an
 * insert-only RLS policy needs no server, so no adapter is required.
 *
 * A public anon key is an open insert endpoint, so the table wants
 * UNIQUE(email) (which is also the duplicate signal), a CHECK on email
 * shape, and Supabase's rate limiting, alongside the honeypot and
 * time-to-submit already carried on JoinInput.
 */
export const waitlist: WaitlistClient = fakeClient;

export type * from './types';
