export const _metadata: Metadata = {
	imageUrl:
		'https://assetsio.gnwcdn.com/call-of-cthulhu-time-to-harvest.png?width=1600&height=900&fit=crop&quality=100&format=png',
	title: 'Call of Cthulhu',
	pitch: ['pitch'],
	atmosphere: ['atmosphere'],
	usps: ['usps'],
	comparisons: ['comparisons'],
	audience: ['audience']
};
export const load = async (): Promise<Metadata> => {
	return _metadata;
};
