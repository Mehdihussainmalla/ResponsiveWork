import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import WrappertContainer from '../../Components/WrapperContainer/'
import RNRestart from 'react-native-restart'
import navigationStrings from '../../navigation/navigationStrings';
import strings, { changeLanguage } from '../../constants/lang';



const Login = ({ navigation }) => {

  const onchangeLang = (key) => {
    changeLanguage(key);
    //RNRestart.Restart();



  }
  return (

    <SafeAreaView>
      <View style={{ height: '100%', width: '100%', }}>
        <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.CHOOSE_ACCOUNT)}>
          <Text style={{ color: 'black', alignSelf: 'center', fontSize: 50 }}>{strings.LOGIN}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onchangeLang('en')}>   
     <Text>{strings.URDU}</Text>
        </TouchableOpacity>

      </View> 

    </SafeAreaView>
  )
}

export default Login