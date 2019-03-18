export const buildQuery = (args) => {
	return Object.keys(args).map((key) => {
		const encoded = encodeURIComponent(args[key]);
		return `${key}=${encoded}`;
	}).join('&');
};

export const xhr = (method, url, data, config) => {
	const xml = new XMLHttpRequest();
	xml.addEventListener('load', () => {
		debugger;
	});
	xml.open(method, url);
	if (typeof data !== 'undefined') {
		xml.send(data);	
	} else {
		xml.send();
	}
};