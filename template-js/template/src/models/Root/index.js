import { combineReducers } from 'redux'

import CounterReducer from 'src/models/Counter/reducer'

const rootReducer = combineReducers({
  counter: CounterReducer,
})

export default rootReducer
