import { types, CounterActionTypes } from './types'

export default {
  increment: (incrementAmount: number): CounterActionTypes => ({
    type: types.increment,
    payload: {
      incrementAmount,
    },
  }),
  decrement: (decrementAmount: number): CounterActionTypes => ({
    type: types.decrement,
    payload: {
      decrementAmount,
    },
  }),
  reset: (): CounterActionTypes => ({
    type: types.reset,
    payload: null,
  }),
}
