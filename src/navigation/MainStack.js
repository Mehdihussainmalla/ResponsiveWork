import React from "react";
import { Home } from "../Screens";
import HomeStack from "./HomeStack";
import navigationStrings from "./navigationStrings";
import TabStack from "./TabStack";

const MainStack = (Stack) => {
  return (
    <>
    <Stack.Navigator> 
      <Stack.Screen
      options={{headerShown:false}}
      name={navigationStrings.TAB_ROUTES}
        component={TabStack} />
        
        </Stack.Navigator>
    </>
  )

}
export default MainStack





