import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import FontFamily from '../../styles/FontFamily';
export const styles=StyleSheet.create({

    choosetext:{
        alignSelf:'center',
         fontSize:scale(24),
         textTransform:'uppercase',
       fontFamily:FontFamily.mulishBold
        },
        headerview:{ 
            paddingHorizontal:moderateVerticalScale(10)
        }
        ,
        image:{
            height:moderateScale(160),
            width:moderateScale(160)
        },
        texthome:{
            fontSize:scale(20),
            color:colors.redB,
            fontFamily:FontFamily.mulishBold
        },
        freelancer:{
            justifyContent:'center',
         alignItems:'center'
        },
        home:{
            justifyContent:'center', 
        alignItems:'center'
    },
    mainview:{
        flex:0.9,
        justifyContent:'space-between',
        // alignItems:'center'
        padding:moderateScale(10)
    }
        
    
})