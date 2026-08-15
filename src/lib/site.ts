/** Site-wide constants. Single source for SEO, nav and footer. */

export const site = {
	name: 'Freem',
	title: 'Freem — Know What You Can Actually Spend',
	description:
		"Freem is a personal finance app that shows how much of your money is actually free to spend after bills, subscriptions and planned spending are accounted for.",
	ogTitle: 'Know what you can actually spend.',
	ogDescription:
		"Your bank balance tells you what you have. Freem tells you what's actually free to spend.",
	tagline: "Freem tells you what's actually free to spend.",
	contactEmail: 'hello@freem.app',
} as const;

/**
 * Header nav. Hidden below 768 — the mobile artboard drops these entirely.
 * Root-relative so the same header works from /privacy and /terms; from the
 * home page these still resolve as same-page fragment scrolls.
 */
export const navLinks = [
	{ href: '/#how', label: 'How it works' },
	{ href: '/#why', label: 'Why Freem' },
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
		heading: 'Freem',
		links: [
			{
				href: `mailto:${site.contactEmail}`,
				label: 'Contact',
				mobileHidden: false,
			},
			{ href: '/#waitlist', label: 'Get early access', mobileHidden: true },
		],
	},
] as const;

/** Every primary CTA points at the same form. One conversion path. */
export const WAITLIST_ANCHOR = '/#waitlist';
