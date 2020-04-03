import types from './types'

const initialState = {
  amount: 0,
}

const counterReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case types.increment:
      return {
        ...state,
        amount: state.amount + payload.incrementAmount,
      }
    case types.decrement:
      return {
        ...state,
        amount: state.amount - payload.decrementAmount,
      }
    case types.reset:
      return {
        ...state,
        amount: 0,
      }
    default:
      return state
  }
}

export default counterReducer
