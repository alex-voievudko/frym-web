export type ValidationOptionId =
	| 'safe-to-spend'
	| 'bills-subscriptions'
	| 'monthly-planning'
	| 'where-money-goes'
	| 'partner'
	| 'other';

export interface JoinInput {
	email: string;
	/** Which CTA started the signup, for later attribution. */
	source?: string;
	/** Honeypot. A real person leaves this empty. */
	hp?: string;
	/** Time from form render to submit; sub-second submits are bots. */
	elapsedMs?: number;
}

/**
 * `already-joined` is a success, not an error — the visitor is on the list
 * either way, and saying so is friendlier than an error state.
 *
 * Note it must be derivable from the write itself. Supabase will run with an
 * insert-only RLS policy, so the anon key cannot SELECT to check first; the
 * signal is the unique-violation code on a UNIQUE(email) constraint.
 */
export type JoinResult =
	| { ok: true; status: 'joined' | 'already-joined' }
	| {
			ok: false;
			reason: 'invalid-email' | 'rate-limited' | 'network' | 'server' | 'unknown';
	  };

export interface AnswerInput {
	email: string;
	optionId: ValidationOptionId;
}

export interface WaitlistClient {
	join(input: JoinInput): Promise<JoinResult>;
	/**
	 * Writes to a separate table rather than updating the waitlist row — the
	 * same insert-only policy applies.
	 */
	answer(input: AnswerInput): Promise<{ ok: boolean }>;
}
