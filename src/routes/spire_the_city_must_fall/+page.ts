import type { Metadata } from '$lib/types/metadata';
import metadata from './metadata.json';

export const _metadata: Metadata = metadata;

export const load = async (): Promise<Metadata> => {
	return metadata as Metadata;
};
