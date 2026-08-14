export interface FaqItem {
	q: string;
	a: string;
}

export const faq: FaqItem[] = [
	{
		q: 'What is Frym?',
		a: 'Frym is a personal finance app that helps you understand how much of your money is genuinely free to spend after upcoming commitments and planned spending are accounted for.',
	},
	{
		q: 'Is Frym a budgeting app?',
		a: 'Not in the traditional sense. Frym lets you plan the money that needs structure while leaving the rest genuinely Free. You do not need to assign every euro to a category.',
	},
	{
		q: 'What does “Free” mean?',
		a: 'Free is the money you currently have that is not Locked for commitments or Reserved for planned spending.',
	},
	{
		q: 'Does Frym connect to my bank?',
		a: 'The first version is focused on manual personal finance management. Bank connectivity may be explored later.',
	},
	{
		q: 'Will Frym support couples or households?',
		a: 'Household collaboration is planned for a later stage. The first version is focused on a single user.',
	},
	{
		q: 'Will Frym use AI?',
		a: 'AI-assisted money management is part of the longer-term direction, but the first release is focused on getting the core financial model right.',
	},
	{
		q: 'When will Frym launch?',
		a: 'Frym is currently in development. Join the waitlist to get notified when early access becomes available.',
	},
	{
		q: 'How much will Frym cost?',
		a: 'Frym will have a free version. A paid Frym Plus plan is planned for users who want additional features and fewer limits. Pricing will be announced closer to launch.',
	},
];
