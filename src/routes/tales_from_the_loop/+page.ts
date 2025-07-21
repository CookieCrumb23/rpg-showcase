export const _metadata: Metadata = {
	imageUrl: 'https://freeleaguepublishing.com/wp-content/uploads/2023/09/TalesfromtheLoop.jpg',
	title: 'Tales from the Loop',
	pitch: ['pitch'],
	atmosphere: ['atmosphere'],
	usps: ['usps'],
	comparisons: ['comparisons'],
	audience: ['audience']
};
export const load = async (): Promise<Metadata> => {
	return _metadata;
};
