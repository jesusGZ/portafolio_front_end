//importamos las funciones de redux
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

//importamos nuestro reducer
import userReducer from './userReducer';

//creamos un reducer principal que combina todos los reducer que realicemos
//en este caso solo tenemos un reducer
const mainReducer = combineReducers({ user: userReducer });

//creamos el store especificando que utilizamos thunk
export default createStore(mainReducer, applyMiddleware(thunk));
