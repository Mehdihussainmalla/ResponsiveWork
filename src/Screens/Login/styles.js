import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import FontFamily from '../../styles/FontFamily';



export const styles = StyleSheet.create({
    container:{
        flex:1
    },
       
    imagestyle:{
        height:moderateScale(200),
        width:'100%',
        justifyContent:'center',
        alignItems:'center'

    },
    logintext:{
        fontSize:scale(40),
        color:colors.redColor,
        fontFamily:FontFamily.mulishBold,
       
    },
    inputview:{
        paddingHorizontal:moderateScale(18),
        paddingVertical:moderateVerticalScale(30)

    },
   

})