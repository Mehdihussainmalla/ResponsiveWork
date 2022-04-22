import { ChooseAccount, Login, Register, SetPassword, } from "../Screens";
import * as React from 'react'
import navigationStrings from "./navigationStrings";
const AuthStack = (Stack) => {
    console.log(Stack)
    return (
        <>
            <Stack.Navigator
                options={{ headerShown: false }}>
                <Stack.Screen options={{ headerShown: false }} name={navigationStrings.LOGIN}
                    component={Login} />
                <Stack.Screen options={{ headerShown: false }} name={navigationStrings.CHOOSE_ACCOUNT}
                    component={ChooseAccount} />
                <Stack.Screen options={{ headerShown: false }} name={navigationStrings.SET_PASSWORD}
                    component={SetPassword} />
                <Stack.Screen options={{ headerShown: false }} name={navigationStrings.REGISTER}
                    component={Register} />
            </Stack.Navigator>
        </>

    )
}

export default AuthStack