import { StyleSheet, Text, View,Button ,TouchableOpacity,SafeAreaView} from 'react-native'
import React from 'react'
import navigationStrings from '../../navigation/navigationStrings'
import WrapperContainer from '../../Components/WrapperContainer'

const Home = ({navigation}) => {
  return (
    <WrapperContainer>
    <SafeAreaView>
      <Button title='Go' onPress={()=> navigation.navigate(navigationStrings.FORGET_PASSWORD)}/>
 
    </SafeAreaView>
    </WrapperContainer>
  )
}

export default Home

const styles = StyleSheet.create({})