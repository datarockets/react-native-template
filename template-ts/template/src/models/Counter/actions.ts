import { CounterTypes, CounterActionTypes } from './types'

export default {
  increment: (incrementAmount: number): CounterActionTypes => ({
    type: CounterTypes.increment,
    payload: {
      incrementAmount,
    },
  }),
  decrement: (decrementAmount: number): CounterActionTypes => ({
    type: CounterTypes.decrement,
    payload: {
      decrementAmount,
    },
  }),
  reset: (): CounterActionTypes => ({
    type: CounterTypes.reset,
    payload: null,
  }),
}
