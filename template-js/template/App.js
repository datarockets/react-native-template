import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { MainNavigator } from 'src/navigation'
import models from 'src/models'

const App = () => {
  const { store, persistor } = models.initStore()

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainNavigator/>
      </PersistGate>
    </Provider>
  )
}

export default App
