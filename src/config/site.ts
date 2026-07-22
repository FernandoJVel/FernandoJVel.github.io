export type SiteLink = {
	href: string;
	label: string;
};

export type SiteConfig = {
	name: string;
	title: string;
	description: string;
	siteUrl: string;
	email: string;
	locale: string;
	authorName: string;
	authorRole: string;
	keywords: string[];
	ogImage: string;
	navLinks: SiteLink[];
	extraPages: SiteLink[];
	legalLinks: SiteLink[];
	socialLinks: SiteLink[];
};

const defaultSiteUrl = 'https://fernandojvel.github.io';
const envSiteUrl = process.env.SITE_URL ?? process.env.PUBLIC_SITE_URL;
const normalizedSiteUrl = (envSiteUrl || defaultSiteUrl).replace(/\/+$/, '');

export const siteConfig: SiteConfig = {
	name: 'Fernando Velasco',
	title: 'Fernando Velasco | Junior QA Engineer ',
	description:
		'Portfolio of Fernando Velasco, Junior QA Engineer specializing in Manual Testing, API Testing, Selenium, Python, and SQL.',
	// Set SITE_URL or PUBLIC_SITE_URL to keep canonicals, robots.txt, and the sitemap aligned in each environment.
	siteUrl: normalizedSiteUrl,
	email: 'fernandovelqa@gmail.com',
	locale: 'en-US',
	authorName: 'Fernando Velasco',
	authorRole: 'Junior Bilingual QA Engineer',
	keywords: [
		'QA Engineer',
		'Junior QA Engineer',
		'Software Testing',
		'Automation Testing',
		'Manual Testing',
		'API Testing',
		'Selenium',
		'Python',
		'Postman',
		'SQL',
		'QA Portfolio',
		'Software Quality Assurance'
	],
	ogImage: '/og-image.svg',
	navLinks: [
		{ href: '/work', label: 'Work' },
		{ href: '/about', label: 'About' },
		{ href: '/resume', label: 'Resume' },
	],
	extraPages: [
		{ href: '/work/nextpoint', label: 'Case Study' },
		{ href: '/cookies', label: 'Cookies' },
		{ href: '/privacy', label: 'Privacy' },
		{ href: '/terms', label: 'Terms' },
		{ href: '/404', label: '404' },
	],
	legalLinks: [
		{ href: '/cookies', label: 'Cookies' },
		{ href: '/privacy', label: 'Privacy' },
		{ href: '/terms', label: 'Terms' },
	],
	socialLinks: [
		{ href: 'https://www.linkedin.com/in/fernandovelqa', label: 'LinkedIn' },
		{ href: 'https://github.com/FernandoJVel', label: 'Dribbble' },
	],
};
