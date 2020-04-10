import { Action } from 'redux'

const prefix = 'COUNTER'

export const types =  {
  increment: `${prefix}.INCREMENT`,
  decrement: `${prefix}.DECREMENT`,
  reset: `${prefix}.RESET`,
}

export interface CounterState {
  amount: number,
}

export interface IncrementCounterAction extends Action {
  type: typeof types.increment,
  payload: {
    incrementAmount: number,
  },
}

interface DecrementCounterAction extends Action {
  type: typeof types.decrement,
  payload: {
    decrementAmount: number,
  },
}

interface ResetCounterAction extends Action {
  type: typeof types.reset,
  payload: null,
}

export type CounterActionTypes = IncrementCounterAction
  | DecrementCounterAction
  | ResetCounterAction
