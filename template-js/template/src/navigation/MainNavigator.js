import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import SampleScreen from '../screens/Sample'

const Stack = createStackNavigator()

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SampleScreen">
        <Stack.Screen name="SampleScreen" component={SampleScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator
