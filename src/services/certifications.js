import constants from '../constants';

const { CONEXION_BASE, PORT } = constants;

export async function certificationsInfo(user_id) {
	try {
		const headers = { 'Content-Type': 'application/json' };
		const body = JSON.stringify(user_id);
		const response = await fetch(`${CONEXION_BASE}${PORT}/certifications`, { method: 'GET', mode: 'cors', headers: headers, body: body });

		const data = await response.json();
		return data;
	} catch (error) {
		return error;
	}
}
