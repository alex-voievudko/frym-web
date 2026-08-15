// UNMOUNTED — see Features.astro. Kept alongside its component.
import type { IconName } from '../components/primitives/Icon.astro';

/**
 * `emphasis` promotes an item's top rule from hairline to ink. Exactly one
 * item per group carries it — the artboards use it as a visual anchor rather
 * than to rank the items.
 */
export interface Feature {
	icon: IconName;
	label: string;
	body: string;
	emphasis?: boolean;
}

export const features: Feature[] = [
	{
		icon: 'coin',
		label: 'Free to spend',
		body: 'Always see how much money has no current commitment.',
		emphasis: true,
	},
	{
		icon: 'wallet',
		label: 'Accounts',
		body: 'Track where your money currently sits.',
	},
	{
		icon: 'home',
		label: 'Commitments',
		body: 'Keep upcoming bills and subscriptions protected.',
	},
	{
		icon: 'calendar',
		label: 'Monthly plan',
		body: 'Reserve money for flexible spending.',
	},
	{
		icon: 'transfer',
		label: 'Transactions',
		body: 'Record income, spending and transfers.',
	},
	{
		icon: 'bars',
		label: 'Monthly overview',
		body: 'Understand how your plan and real spending are changing over time.',
	},
];
