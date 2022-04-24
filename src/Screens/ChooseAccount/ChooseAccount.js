import { View, Text ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import navigationStrings from '../../navigation/navigationStrings'
import RNRestart from 'react-native-restart'
import strings, { changeLanguage } from '../../constants/lang';
import WrapperContainer from '../../Components/WrapperContainer';
import HeaderComp from '../../Components/HeaderComp';
import ButtonComp from '../../Components/ButtonComp';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import { styles } from './styles';
import imagePath from '../../constants/imagePath';



const ChooseAccount = ({navigation}) => {
 
  return (
   <WrapperContainer>
     <View style={styles.headerview}>
      <HeaderComp/>
      </View>
     <View style={styles.mainview}>      
       <Text style={styles.choosetext}>Choose Your Account Type</Text>
       <View style={styles.home}>
      <Image style={styles.image} source={imagePath.flower_icon} />
      <Text style={styles.texthome}>Home</Text>
       </View>
       <View style={styles.freelancer}>
      <Image style={styles.image} source={imagePath.flower_icon} />
      <Text style={styles.texthome}>Home</Text>
       </View>
     </View>
     <View>
     <ButtonComp onPress={()=>navigation.navigate(navigationStrings.HOME)} 
      title={'Continue'}
       btnview={{width:'100%'}}/>
       </View>
   </WrapperContainer>
  )
}

export default ChooseAccount