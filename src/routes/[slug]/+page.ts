import type { PageLoad } from './$types';
import type { Metadata } from '$lib/types';
import { error } from '@sveltejs/kit';

// Create a mapping of all JSON files in content/
const metadataFiles = import.meta.glob('../../lib/content/*.json');

export const load: PageLoad = async ({ params }) => {
	const matchPath = `../../lib/content/${params.slug}.json`;
	const loader = metadataFiles[matchPath];

	if (!loader) {
		throw error(404, `Metadata not found for slug: ${params.slug}`);
	}

	return await loader().then((mod: any) => mod.default);
};