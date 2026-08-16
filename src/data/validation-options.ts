import type { ValidationOptionId } from '../lib/waitlist/types';

/**
 * Asked once, after a successful signup. Never blocks the signup — the
 * conversion is already banked by the time this renders.
 */
export const validationQuestion =
	'What is the main thing you want more clarity on with your money?';

export const validationOptions: { id: ValidationOptionId; label: string }[] = [
	{ id: 'safe-to-spend', label: 'How much I can actually spend' },
	{ id: 'bills-subscriptions', label: 'Upcoming bills & subscriptions' },
	{ id: 'monthly-planning', label: 'Planning monthly spending' },
	{ id: 'where-money-goes', label: 'Where my money goes' },
	{ id: 'partner', label: 'Managing money with my partner' },
	{ id: 'other', label: 'Something else' },
];
