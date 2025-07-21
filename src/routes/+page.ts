export async function load() {
	const modules = import.meta.glob('../lib/content/*.json');

	const entries = await Promise.all(
		Object.entries(modules).map(async ([path, resolver]) => {
			const mod: Metadata = await resolver();

			path = path.replace("../lib/content/", "")
				.replace(".json", "");
			console.debug(path);


			return {
				...mod,
				path
			};
		})
	);

	return { tiles: entries.sort((a, b) => a.title.localeCompare(b.title)) };
}
