export const _metadata: Metadata = {
	imageUrl: 'https://eclipsephase.com/wp-content/uploads/2021/04/EP2-Cover-scaled.jpg',
	title: 'Eclipse Phase',
	pitch: ['pitch'],
	atmosphere: ['atmosphere'],
	usps: ['usps'],
	comparisons: ['comparisons'],
	audience: ['audience']
};
export const load = async (): Promise<Metadata> => {
	return _metadata;
};
