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
    forgetview:{
        alignSelf:'flex-end',
        marginVertical:moderateVerticalScale(24)
    },
    forgettext:{
        fontSize:scale(14),
        fontFamily:FontFamily.mulishMedium,
        color:colors.lightSkyB
    },
    addview:{
        flexDirection:'row',
        justifyContent:'center',
        margin:moderateScale(14)
    },
    notamem:{
        fontSize:scale(13)
    },
    joinnow:{
        fontSize:scale(15),
        fontFamily:FontFamily.mulishSemiBold,
        color:colors.lightSkyB
    }
   

})