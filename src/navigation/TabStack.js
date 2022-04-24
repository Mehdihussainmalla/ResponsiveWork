import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import navigationStrings from './navigationStrings';
import { ChooseAccount, Home, Login } from '../Screens';
import {Image} from 'react-native'
import imagePath from '../constants/imagePath';


const Tab = createBottomTabNavigator();

 const TabStack =() => {
  return (
  
      <Tab.Navigator screenOptions={{headerShown:false,
      tabBarActiveTintColor:'red',
      tabBarInactiveTintColor:'green'}}>
        <Tab.Screen options={{tabBarIcon:({focused})=>{
            return(
                <Image style={{tintColor :focused? 'yellow' : 'lightgrey'}} source={imagePath.back_arrow}/>
            )
        }}} name={navigationStrings.HOME} component={Home} />
        <Tab.Screen name={navigationStrings.CHOOSE_ACCOUNT} component={ChooseAccount} />
      </Tab.Navigator>
  
  );
}
export default TabStack