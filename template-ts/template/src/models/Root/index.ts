import { combineReducers } from 'redux'

import CounterReducer from 'src/models/Counter/reducer'

const rootReducer = combineReducers({
  counter: CounterReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
