import { combineReducers } from 'redux'

import CounterReducer from '../Counter/reducer'

const rootReducer = combineReducers({
  counter: CounterReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
