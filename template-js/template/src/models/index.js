import { all } from 'redux-saga/effects'

import CounterReducer from './Counter/reducer'

export default {
  reducers: {
    counter: CounterReducer,
  },
  sagas: function* watch() {
    yield all([
      /* call(Saga), */
    ])
  },
}
