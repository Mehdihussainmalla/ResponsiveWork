import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './AuthStack'
import MainStack from './MainStack'
import TabStack from './TabStack'

const Stack = createNativeStackNavigator()
const Routes = () => {
  return (
    <NavigationContainer>
      {false? MainStack(Stack) :AuthStack(Stack)}
    </NavigationContainer>
  
     
  )
}

export default Routes