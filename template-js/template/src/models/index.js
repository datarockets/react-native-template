import AsyncStorage from '@react-native-community/async-storage'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'

import CounterReducer from './Counter/reducer'

const reducers = {
  counter: CounterReducer,
}

const sagas = function* watch() {
  yield all([
    /* call(Saga), */
  ])
}

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: AsyncStorage,
  },
  combineReducers(reducers),
)

const initStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    persistedReducer,
    applyMiddleware(sagaMiddleware),
  )
  const persistor = persistStore(store)

  sagaMiddleware.run(sagas)

  return { store, persistor }
}

export default {
  initStore,
}
