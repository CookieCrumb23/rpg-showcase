export async function load() {
	const modules = import.meta.glob('./**/+page.ts');

	const entries = await Promise.all(
		Object.entries(modules).map(async ([path, resolver]) => {
			const mod: any = await resolver();
			const metadata = mod._metadata;

			return {
				...metadata,
				path: path.split('/')[1]
			};
		})
	);

	return { tiles: entries.sort((a, b) => a.title.localeCompare(b.title)) };
}
