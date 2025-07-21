export const _metadata: Metadata = {
	imageUrl: 'https://freeleaguepublishing.com/wp-content/uploads/2023/08/Vaesen_hero3-scaled.jpg',
	title: 'Vaesen',
	pitch: ['pitch'],
	atmosphere: ['atmosphere'],
	usps: ['usps'],
	comparisons: ['comparisons'],
	audience: ['audience']
};
export const load = async (): Promise<Metadata> => {
	return _metadata;
};
