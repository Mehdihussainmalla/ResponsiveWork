import React from "react";
import { Home } from "../Screens";
import HomeStack from "./HomeStack";
import navigationStrings from "./navigationStrings";

const MainStack = (Stack) => {
  return (
    <>
    <Stack.Navigator> 
      <Stack.Screen
      options={{headerShown:false}}
      name={navigationStrings.HOME}
        component={HomeStack} />
        </Stack.Navigator>
    </>
  )

}
export default MainStack





