import { View, Text,Image ,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import imagePath from '../constants/imagePath'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'


const HeaderComp = ({onPressBack}) => {
    const navigation=useNavigation();
    const goBack =()=>{
        navigation.goBack();
    }
  return (
    <View style={styles.container}>
        <TouchableOpacity 
        onPress={!!onPressBack ? onPressBack: ()=>goBack() }>
      <Image source={imagePath.back_arrow}/>
      </TouchableOpacity>
    </View>
  )
}

export default HeaderComp
const styles=StyleSheet.create({
    container:{
        backgroundColor:'lightgrey',
        flexDirection:'row',
        alignItems:'center',
        height:moderateScale(42),
       
    }
})