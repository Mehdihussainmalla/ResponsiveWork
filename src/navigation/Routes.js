import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './AuthStack'
import MainStack from './MainStack'

const Stack = createNativeStackNavigator()
const Routes = () => {
  return (
    <NavigationContainer>
      {AuthStack(Stack)}
    </NavigationContainer>
  
     
  )
}

export default Routes