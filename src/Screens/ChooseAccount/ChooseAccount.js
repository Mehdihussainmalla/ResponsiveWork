import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import navigationStrings from '../../navigation/navigationStrings'

const ChooseAccount = ({navigation}) => {
  return (
    <View style={{flex:1, justifyContent:'center',
    alignItems:'center'}}>
      <TouchableOpacity  onPress={()=> navigation.navigate(navigationStrings.SET_PASSWORD)}>
      <Text style={{fontSize:40}}>ChooseAccount</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ChooseAccount