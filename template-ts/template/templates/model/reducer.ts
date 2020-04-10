import { Reducer } from 'redux'

import { {{ pascalCase name }}Types, {{ pascalCase name }}ActionTypes, {{ pascalCase name }}State } from './types'

const initialState: {{ pascalCase name }}State = {
  amount: 0,
}

const {{ camelCase name }}Reducer: Reducer<{{ pascalCase name }}State, {{ pascalCase name }}ActionTypes> = (
  state = initialState,
  action: {{ pascalCase name }}ActionTypes,
): {{ pascalCase name }}State => {
  switch (action.type) {
    default:
      return state
  }
}

export default {{ camelCase name }}Reducer
