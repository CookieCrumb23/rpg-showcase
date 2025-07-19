export const navRoutes = Object.entries(
	import.meta.glob('/src/routes/**/+page.svelte', { eager: true })
).map(([path]) => {
	const route = path
		.replace('/src/routes', '')
		.replace('/+page.svelte', '')
		.replace(/\/index$/, '/') || '/';

	const label =route === '/' ? 'Home' : route.slice(1).replace('-', ' ').charAt(0).toUpperCase() + route.slice(2);

	return {
		href: route,
		label: label
	};
});
