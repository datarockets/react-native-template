import types from './types'

export default {
  increment: (incrementAmount) => ({
    type: types.increment,
    payload: {
      incrementAmount,
    },
  }),
  decrement: (decrementAmount) => ({
    type: types.decrement,
    payload: {
      decrementAmount,
    },
  }),
  reset: () => ({
    type: types.reset,
    payload: null,
  }),
}
