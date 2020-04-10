import { RootState } from '../Root'

import { {{ pascalCase name }}State } from './types'

const getState = (state: RootState): {{ pascalCase name }}State => state.{{ camelCase name }}

export default {
}

