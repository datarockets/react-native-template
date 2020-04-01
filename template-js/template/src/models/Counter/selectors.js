const getState = (state) => state.counter

const counterAmountSelector = (state) => getState(state).amount

export default {
  counterAmountSelector,
}
