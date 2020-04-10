import AsyncStorage from '@react-native-community/async-storage'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'

import CounterReducer from './Counter/reducer'

const rootReducer = combineReducers({
  counter: CounterReducer,
})

export type RootState = ReturnType<typeof rootReducer>

const persistedReducer = persistReducer<RootState>(
  {
    key: 'root',
    storage: AsyncStorage,
  },
  rootReducer,
)

const sagas = function* watch() {
  yield all([
    /* call(Saga), */
  ])
}

const initStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware))
  const persistor = persistStore(store)

  sagaMiddleware.run(sagas)

  return { store, persistor }
}

export default {
  initStore,
}
