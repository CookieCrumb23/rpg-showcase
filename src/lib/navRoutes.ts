import { titleCase } from 'title-case';

export const navRoutes = Object.entries(
	import.meta.glob('/src/lib/content/*.json', { eager: true })
).map(([path]) => {
	//console.debug(path);
	const route =
		path
			.replace('/src/lib/content/', '')
			.replace('.json', '')

	const label = route === '/' ? 'Home' : titleCase(route.replaceAll('_', ' '));

	console.debug(route);
	console.debug(label);
	return {
		href: route,
		label: label
	};
});
