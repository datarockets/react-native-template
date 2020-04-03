import { all, call } from 'redux-saga/effects'

import actions from './actions'
import api from './api'
import types from './types'

export default function* () {
  yield all([
    call(function* watch() {
    }),
  ])
}
