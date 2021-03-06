import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import Resocket, { createResocketMiddleware } from 'resocket';
import emitEvents from '../global/types';
import rootReducer from '../reducers';

const socket = Resocket.connect('http://localhost:9000');
const resocketMiddleware = createResocketMiddleware(socket, emitEvents);

const middleware = applyMiddleware(logger(), thunk, resocketMiddleware);

const configureStore = () => createStore(rootReducer, middleware);

export default configureStore;
