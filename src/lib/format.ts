/**
 * Money formatting.
 *
 * The design system fixes this: EU format (dot thousands, comma decimals),
 * cents in a nested span at ~44% of the figure size in `faint`, expenses
 * signed with U+2212 MINUS (not a hyphen), income `+`, transfers unsigned.
 */

/** U+2212. A hyphen is visibly too short next to lining figures. */
export const MINUS = '−';

export interface SplitAmount {
	/** Sign, symbol and integer part — `€1.800`, `−€1.300`. */
	whole: string;
	/** Decimal separator and cents — `,00`. Rendered smaller and faint. */
	cents: string;
}

const eu = new Intl.NumberFormat('de-DE', {
	minimumFractionDigits: 2,
	maximumFractionDigits: 2,
});

/**
 * Split an amount so the cents can be typeset separately.
 *
 * @param sign  `auto` signs negatives only, `always` also signs positives
 *              with `+` (income), `never` leaves it unsigned (transfers).
 */
export function splitEur(
	value: number,
	{ sign = 'auto' }: { sign?: 'auto' | 'always' | 'never' } = {},
): SplitAmount {
	const [whole, cents] = eu.format(Math.abs(value)).split(',');

	let prefix = '';
	if (sign !== 'never' && value < 0) prefix = MINUS;
	else if (sign === 'always' && value > 0) prefix = '+';

	return { whole: `${prefix}€${whole}`, cents: `,${cents}` };
}

/** Flat string form, for aria-labels and anywhere cents aren't split out. */
export function formatEur(
	value: number,
	opts?: { sign?: 'auto' | 'always' | 'never' },
): string {
	const { whole, cents } = splitEur(value, opts);
	return whole + cents;
}

/** Whole-euro percentage of a total, for the allocation figures. */
export function percentOf(part: number, total: number): number {
	return total === 0 ? 0 : Math.round((part / total) * 100);
}
