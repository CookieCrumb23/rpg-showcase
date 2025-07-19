import { titleCase } from 'title-case';

export const navRoutes = Object.entries(
	import.meta.glob('/src/routes/**/+page.svelte', { eager: true })
).map(([path]) => {
	const route =
		path
			.replace('/src/routes', '')
			.replace('/+page.svelte', '')
			.replace(/\/index$/, '/') || '/';

	const label = route === '/' ? 'Home' : titleCase(route.slice(1).replaceAll('_', ' '));

	return {
		href: route,
		label: label
	};
});
