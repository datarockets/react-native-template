import { Action } from 'redux'

export enum CounterTypes {
  increment = 'COUNTER.INCREMENT',
  decrement = 'COUNTER.DECREMENT',
  reset = 'COUNTER.RESET',
}

export interface CounterState {
  amount: number,
}

interface IncrementCounterAction extends Action<CounterTypes.increment> {
  type: CounterTypes.increment,
  payload: {
    incrementAmount: number,
  },
}

interface DecrementCounterAction extends Action<CounterTypes.decrement> {
  type: CounterTypes.decrement,
  payload: {
    decrementAmount: number,
  },
}

interface ResetCounterAction extends Action<CounterTypes.reset> {
  type: CounterTypes.reset,
  payload: null,
}

export type CounterActionTypes = IncrementCounterAction
  | DecrementCounterAction
  | ResetCounterAction
