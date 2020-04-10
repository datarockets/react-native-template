import { Reducer } from 'redux'

import {
  CounterTypes,
  CounterActionTypes,
  IncrementCounterAction,
  DecrementCounterAction,
  CounterState,
} from './types'

const initialState: CounterState = {
  amount: 0,
}

const counterReducer: Reducer<CounterState, CounterActionTypes> = (
  state = initialState,
  action: CounterActionTypes,
): CounterState => {
  switch (action.type) {
    case CounterTypes.increment:
      return {
        ...state,
        amount: state.amount + (action as IncrementCounterAction).payload.incrementAmount,
      }
    case CounterTypes.decrement:
      return {
        ...state,
        amount: state.amount - (action as DecrementCounterAction).payload.decrementAmount,
      }
    case CounterTypes.reset:
      return {
        ...state,
        amount: 0,
      }
    default:
      return state
  }
}

export default counterReducer
