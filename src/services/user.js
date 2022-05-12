import constants from '../constants';

const { CONEXION_BASE, PORT } = constants;

export async function userInfo(id) {
	try {
		const headers = { 'Content-Type': 'application/json', id: id };
		const response = await fetch(`${CONEXION_BASE}${PORT}/user`, { method: 'GET', mode: 'cors', headers: headers });

		const data = await response.json();
		return data;
	} catch (error) {
		return error;
	}
}

export async function userLogin(user, password) {
	try {
		const headers = { 'Content-Type': 'application/json' };
		const body = JSON.stringify(user, password);
		const response = await fetch(`${CONEXION_BASE}${PORT}/user/login`, { method: 'GET', mode: 'cors', headers: headers, body: body });

		const data = await response.json();
		return data;
	} catch (error) {
		return error;
	}
}
