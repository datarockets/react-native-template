import { Action } from 'redux'

export enum CounterTypes {
  increment = 'COUNTER.INCREMENT',
  decrement = 'COUNTER.DECREMENT',
  reset = 'COUNTER.RESET',
}

export interface CounterState {
  amount: number,
}

export interface IncrementCounterAction extends Action {
  type: CounterTypes.increment,
  payload: {
    incrementAmount: number,
  },
}

export interface DecrementCounterAction extends Action {
  type: CounterTypes.decrement,
  payload: {
    decrementAmount: number,
  },
}

export interface ResetCounterAction extends Action {
  type: CounterTypes.reset,
  payload: null,
}

export type CounterActionTypes = IncrementCounterAction
  | DecrementCounterAction
  | ResetCounterAction
