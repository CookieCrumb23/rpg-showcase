import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ url }) => {
	const contentMap: Record<string, { image: string; title: string; text: string }> = {
		'/foo': {
			image: 'https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp',
			title: 'Foo Page',
			text: 'This is the text for the Foo page.'
		},
		'/bar': {
			image: 'https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp',
			title: 'Bar Page',
			text: 'Welcome to the Bar page.'
		}
	};

	return contentMap[url.pathname] ?? {
		image: '',
		title: 'Not Found',
		text: 'This page does not exist in the content map.'
	};
};

export const prerender = true;
export const trailingSlash = 'smart';