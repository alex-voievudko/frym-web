import type { WaitlistClient } from './types';

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

/** Deliberately loose. Real validation is the confirmation email. */
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Stand-in until Supabase is wired. Every branch a real backend can return is
 * reachable here, so the states can be checked against the artboards without
 * a server: `dupe@…` already joined, `fail@…` server error, `slow@…` a long
 * request.
 */
export const fakeClient: WaitlistClient = {
	async join({ email, hp, elapsedMs }) {
		const value = email.trim().toLowerCase();

		if (!EMAIL.test(value)) return { ok: false, reason: 'invalid-email' };

		// Bots fill hidden fields and submit instantly. Both are silent
		// successes — telling a bot why it failed only helps it.
		if (hp) return { ok: true, status: 'joined' };
		if (elapsedMs !== undefined && elapsedMs < 1500) {
			return { ok: true, status: 'joined' };
		}

		if (value.startsWith('slow@')) await wait(4000);
		else await wait(700);

		if (value.startsWith('dupe@')) return { ok: true, status: 'already-joined' };
		if (value.startsWith('fail@')) return { ok: false, reason: 'server' };

		return { ok: true, status: 'joined' };
	},

	async answer() {
		await wait(400);
		return { ok: true };
	},
};
