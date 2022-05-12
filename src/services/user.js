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
