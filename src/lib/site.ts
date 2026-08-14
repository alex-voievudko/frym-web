/** Site-wide constants. Single source for SEO, nav and footer. */

export const site = {
	name: 'Frym',
	title: 'Frym — Know What You Can Actually Spend',
	description:
		'Frym is a personal finance app that shows how much of your money is genuinely free after bills, subscriptions and planned spending are accounted for.',
	ogTitle: 'Know what you can actually spend.',
	ogDescription:
		'Your balance tells you how much money you have. Frym tells you how much is genuinely free.',
	tagline:
		'Frym helps you understand how much of your money is genuinely free to spend.',
	contactEmail: 'hello@frym.app',
} as const;

/**
 * Header nav. Hidden below 768 — the mobile artboard drops these entirely.
 * Root-relative so the same header works from /privacy and /terms; from the
 * home page these still resolve as same-page fragment scrolls.
 */
export const navLinks = [
	{ href: '/#how', label: 'How it works' },
	{ href: '/#why', label: 'Why Frym' },
	{ href: '/#faq', label: 'FAQ' },
] as const;

/**
 * `mobileHidden` links are dropped below 768, matching the mobile artboard —
 * there the sticky bottom bar already carries the waitlist CTA.
 */
export const footerGroups = [
	{
		heading: 'Legal',
		links: [
			{ href: '/privacy', label: 'Privacy Policy', mobileHidden: false },
			{ href: '/terms', label: 'Terms', mobileHidden: false },
		],
	},
	{
		heading: 'Frym',
		links: [
			{
				href: `mailto:${site.contactEmail}`,
				label: 'Contact',
				mobileHidden: false,
			},
			{ href: '/#waitlist', label: 'Join the waitlist', mobileHidden: true },
		],
	},
] as const;

/** Every primary CTA points at the same form. One conversion path. */
export const WAITLIST_ANCHOR = '/#waitlist';
