import { RootState } from '../Root'

import { CounterState } from './types'

const getState = (state: RootState): CounterState => state.counter

const counterAmountSelector = (state: RootState): number => getState(state).amount

export default {
  counterAmountSelector,
}
