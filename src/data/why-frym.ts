export interface WhyItem {
	title: string;
	body: string;
}

/**
 * No `emphasis` here: unlike the other card groups, this section's artboard
 * draws every card with the plain hairline rule.
 */
export const whyFrym: WhyItem[] = [
	{
		title: "Don't budget every euro",
		body: 'Plan only the money that needs a plan. Everything else can stay Free.',
	},
	{
		title: 'Start from today',
		body: 'Use the balances you have now instead of rebuilding the month from day one.',
	},
	{
		title: 'One number that matters',
		body: "Free to Spend stays visible so you always know what's still uncommitted.",
	},
];
