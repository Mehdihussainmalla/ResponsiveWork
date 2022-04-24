
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../styles/colors'
import { moderateScale, scale } from 'react-native-size-matters'

const ButtonComp = ({title,onPress,btnview={}}) => {
  return (
  <TouchableOpacity style={{...styles.btnview,...btnview}} onPress={onPress} activeOpacity={0.9}>
      <Text style={styles.btntext}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonComp

const styles = StyleSheet.create({
    btnview:{
        backgroundColor:colors.lightSky,
       justifyContent:'center',
       alignContent:'center',
       alignItems:'center',
       height:moderateScale(35)
    },
    btntext:{
        fontSize:scale(16),
        color:colors.lightgray
    }
})