import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from './styles';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import TextInputcomponent from '../../Components/TextInputComp';
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';




const Login = ({ navigation }) => {

  return (
    <WrapperContainer>

      <View style={styles.container}>
        <ImageBackground style={styles.imagestyle}
          source={imagePath.flower_image}>
          <Text style={styles.logintext}>LOGIN</Text>
        </ImageBackground>

        <View style={styles.inputview}>
          <TextInputcomponent
            label='enter email'
            placeHolder='enter email'
            container={{ marginBottom: moderateVerticalScale(28) }}
            keyboardType='email-address' />

          <TextInputcomponent
            label='Enter password'
            placeHolder='enter password'
            secureTextEntry={true}
          />

        </View>
      </View>




    </WrapperContainer>


  )
}

export default Login