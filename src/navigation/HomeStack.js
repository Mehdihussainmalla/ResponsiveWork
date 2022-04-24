import React from 'react'
import { ChooseAccount, Home } from '../Screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ForgotPassword from '../Screens/forgotPassword/ForgotPassword'
import navigationStrings from './navigationStrings';
import TabStack from './TabStack';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <>
             <Stack.Navigator
              screenOptions={{headerShown:false}}
              initialRouteName={navigationStrings.HOME}>

                <Stack.Screen name={navigationStrings.HOME}
                component={Home}
                    />
                <Stack.Screen name={navigationStrings.CHOOSE_ACCOUNT}
                    component={ChooseAccount} />
                <Stack.Screen name={navigationStrings.FORGOT_PASSWORD}
                    component={ForgotPassword} />
                    </Stack.Navigator>
       
        </>

    )
}

export default HomeStack