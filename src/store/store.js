import { createStore, applyMiddleware } from 'redux';
import { Map as map } from 'immutable';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import rootSaga from '../sagas';


const sagaMiddleware = createSagaMiddleware();

const initialState = map({
  
})

const configureStore = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)

export default configureStore;
