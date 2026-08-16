export interface FaqItem {
	q: string;
	a: string;
}

export const faq: FaqItem[] = [
	{
		q: 'What is Freem?',
		a: 'Freem is a personal finance app that shows how much of your money is actually free to spend after upcoming commitments and planned spending are accounted for.',
	},
	{
		q: 'Is Freem a budgeting app?',
		a: 'Not in the traditional sense. Freem lets you plan the money that needs a plan and leaves the rest Free. You do not need to assign every euro to a category.',
	},
	{
		// The only curly quotes on the page; the artboards are straight ASCII
		// apostrophes everywhere else.
		q: 'What does “Free” mean?',
		a: 'Free is the money left after Locked commitments and Planned spending are accounted for. It has no current claim on it, so you can spend it, save it, move it or leave it alone.',
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
		q: 'When will Freem launch?',
		a: 'Freem is currently in development. Join the waitlist to be notified when early access opens.',
	},
	{
		q: 'Will Freem be free?',
		a: 'Freem will have a free way to get started. Paid features may be introduced as the product grows.',
	},
];
