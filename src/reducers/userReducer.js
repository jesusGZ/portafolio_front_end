import { apiGetUser, apiAddUser, apiDeleteUser, apiUpdateUser } from '../lib/api';

const initialState = { user: [] };

//tipos de actions
const GET_USERS = 'GET_USERS';
const ADD_USER = 'ADD_USER';
const UPDATE_USER = 'UPDATE_USER';
const DELETE_USER = 'DELETE_USER';

//actions
const getUsers = (user) => ({ type: GET_USERS, payload: user });
const addUser = (user) => ({ type: ADD_USER, payload: user });
const updateUser = (user) => ({ type: UPDATE_USER, payload: user });
const deleteUser = (id) => ({ type: DELETE_USER, payload: id });

export const fetchGetUser = () => {
	//redux-thunk nos permite mandar el dispatch como parámetro
	return (dispatch) => {
		//Llamamos a la función de la api
		apiGetUser()
			.then((res) =>
				//al reolverse la petición de manera correcta desencadenamos la acción
				// getPosts enviando los posts recibidos
				{
					dispatch(getUsers(res));
				}
			)
			.catch((res) => {
				console.log(res);
			});
	};
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
	switch (action.type) {
		case GET_USERS:
			return { ...state, user: action.payload };
		case ADD_USER:
			return { ...state, user: [action.payload, ...state.user] };
		case UPDATE_USER:
			return { ...state, user: [...state.user.map((user) => (user.id === action.payload.id ? action.payload : user))] };
		case DELETE_USER:
			return { ...state, user: [...state.user.filter((elem) => elem.id !== action.payload)] };
		default:
			return { ...state };
	}
}
