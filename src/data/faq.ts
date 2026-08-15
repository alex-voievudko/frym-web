export interface FaqItem {
	q: string;
	a: string;
}

export const faq: FaqItem[] = [
	{
		q: 'What is Frym?',
		a: 'Frym is a personal finance app that shows how much of your money is actually free to spend after upcoming commitments and planned spending are accounted for.',
	},
	{
		q: 'Is Frym a budgeting app?',
		a: 'Not in the traditional sense. Frym lets you plan the money that needs a plan and leaves the rest Free. You do not need to assign every euro to a category.',
	},
	{
		// The only curly quotes on the page; the artboards are straight ASCII
		// apostrophes everywhere else.
		q: 'What does “Free” mean?',
		a: 'Free is the money you currently have that is not Locked for commitments or Reserved for planned spending.',
	},
	{
		q: 'Do I need to connect my bank?',
		a: 'No. The first version works without connecting your bank. You add your accounts, balances and transactions manually. Bank connectivity may come later.',
	},
	{
		q: 'Can I manage money with another person?',
		a: 'Not yet. The first version is focused on individual money management. Shared household features may come later.',
	},
	{
		q: 'When will Frym launch?',
		a: 'Frym is currently in development. Join the waitlist to be notified when early access opens.',
	},
	{
		q: 'Will Frym be free?',
		a: 'Frym will have a free way to get started. Paid features may be introduced as the product grows.',
	},
];
