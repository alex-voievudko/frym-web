export interface WhyItem {
	title: string;
	body: string;
	emphasis?: boolean;
}

export const whyFrym: WhyItem[] = [
	{
		title: 'No need to give every euro a job',
		body: 'Frym does not force you to allocate all your money into categories. Money without a purpose can simply remain Free.',
	},
	{
		title: 'No need to rebuild your whole month',
		body: "Start with today's real balances and add only what still matters.",
	},
	{
		title: 'Planning without rigid budgeting',
		body: 'Reserve money where planning is useful without turning every purchase into a budgeting exercise.',
	},
	{
		title: 'Your most important number stays visible',
		body: 'Frym is built around Free to Spend, not around a long list of categories.',
		emphasis: true,
	},
];
