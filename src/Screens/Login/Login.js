import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text ,SafeAreaView,TouchableOpacity} from 'react-native';
import WrappertContainer from '../../Components/WrapperContainer/'
import navigationStrings from '../../navigation/navigationStrings';


const Login = ({navigation}) => {
  return (
     
        <SafeAreaView>
    <View style={{height:'100%', width:'100%',}}>
      <TouchableOpacity  onPress={() =>navigation.navigate(navigationStrings.CHOOSE_ACCOUNT)}>
      <Text style={{color:'black', alignSelf:'center',fontSize:50}}>Login</Text>
      </TouchableOpacity>
    </View>
   
    </SafeAreaView>
  )
}

export default Login