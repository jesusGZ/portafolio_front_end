import constants from '../constants';

const { CONEXION_BASE, PORT } = constants;

export async function educationInfo(user_id) {
	try {
		const headers = { 'Content-Type': 'application/json', user_id: user_id };
		const response = await fetch(`${CONEXION_BASE}${PORT}/education`, { method: 'GET', mode: 'cors', headers: headers });

		const data = await response.json();
		return data;
	} catch (error) {
		return error;
	}
}
