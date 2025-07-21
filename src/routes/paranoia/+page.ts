export const _metadata: Metadata = {
	imageUrl: 'https://www.mongoosepublishing.com/cdn/shop/collections/ParanoiaAll.jpg',
	title: 'Paranoia',
	pitch: ['pitch'],
	atmosphere: ['atmosphere'],
	usps: ['usps'],
	comparisons: ['comparisons'],
	audience: ['audience']
};
export const load = async (): Promise<Metadata> => {
	return _metadata;
};
