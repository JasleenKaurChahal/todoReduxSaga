import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import {AsyncStorage} from 'react-native';
import rootSaga from './sagas';
import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
const persistor = persistStore(store);

export default function configureStore() {
  return {store, persistor};
}
