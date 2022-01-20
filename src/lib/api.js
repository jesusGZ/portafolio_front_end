//variable url del servidor
const BASEURL = 'http://localhost:8000';

/* export const apiAddPost = (post) => {
	const url = BASEURL + '/posts/';
	const request = {
		method: 'POST',
		body: JSON.stringify(post),
		headers: { 'Content-type': 'application/json; charset=UTF-8' },
	};
	return fetch(url, request).then((response) => response.json());
}; */

export const apiGetUser = () => {
	const url = BASEURL + '/users';
	const request = {
		method: 'GET',
		body: JSON.stringify(),
		headers: { 'Content-type': 'application/json; charset=UTF-8' },
	};
	return fetch(url, request).then((response) => response.json());
};
