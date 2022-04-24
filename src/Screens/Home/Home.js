import { StyleSheet, Text, View,Button ,TouchableOpacity,SafeAreaView} from 'react-native'
import React from 'react'
import navigationStrings from '../../navigation/navigationStrings'
import WrapperContainer from '../../Components/WrapperContainer'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
  const navigation =useNavigation();
  return (
    <WrapperContainer>
    <SafeAreaView>
      <Button title='Go' onPress={()=>navigation.navigate(navigationStrings.CHOOSE_ACCOUNT)}/>
 
    </SafeAreaView>
    </WrapperContainer>
  )
}

export default Home

const styles = StyleSheet.create({})