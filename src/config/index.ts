export const PRODUCT_CATEGORIES = [
	{
		label: 'Products',
		value: 'ui_kits' as const,
		featured: [
			{
				name: 'Editor picks',
				href: `/products?category=ui_kits`,
				imageSrc: '/nav/ui-kits/mixed.jpg',
			},
			{
				name: 'New Arrivals',
				href: '/products?category=ui_kits&sort=desc',
				imageSrc: '/nav/ui-kits/blue.jpg',
			},
			{
				name: 'Bestsellers',
				href: '/products?category=ui_kits',
				imageSrc: '/nav/ui-kits/purple.jpg',
			},
		],
	},
	{
		label: 'Services',
		value: 'icons' as const,
		featured: [
			{
				name: 'Favorite Picks',
				href: `/products?category=icons`,
				imageSrc: '/nav/icons/picks.jpg',
			},
			{
				name: 'Repairs',
				href: '/products?category=icons&sort=desc',
				imageSrc: '/nav/icons/new.jpg',
			},
			{
				name: 'Most Valuable',
				href: '/products?category=icons',
				imageSrc: '/nav/icons/bestsellers.jpg',
			},
		],
	},
];
