import React, { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from './styles';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import TextInputcomponent from '../../Components/TextInputComp';
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import ButtonComp from '../../Components/ButtonComp';
import navigationStrings from '../../navigation/navigationStrings'
import strings, { changeLanguage } from '../../constants/lang';
import RNRestart from 'react-native-restart'
import Modal from 'react-native-modal'

const Login = ({ navigation }) => {

  const [isVisible, setVisible] = useState(true);
  const [isModalvisible, setModalVisible] = useState(false);


  const onchangeLang = (key) => {

    changeLanguage(key);
    RNRestart.Restart();
  }

  const handleModal = () => setModalVisible(() => !isModalvisible);

  return (
    <WrapperContainer>

      <View style={styles.container}>
        <ImageBackground style={styles.imagestyle}
          source={imagePath.flower_icon}>
          <Text style={styles.logintext}>{strings.LOGIN}</Text>
        </ImageBackground>

        <View style={styles.inputview}>
          <TextInputcomponent
            label={strings.ENTER_YOUR_EMAIL}
            placeHolder={strings.ENTER_YOUR_EMAIL}
            container={{ marginBottom: moderateVerticalScale(28) }}
            keyboardType='email-address' />

          <TextInputcomponent
            label={strings.ENTER_PASSWORD}
            placeHolder={strings.ENTER_PASSWORD}
            secureTextEntry={isVisible}
            rightIcon={!isVisible ? imagePath.show_icon : imagePath.hide_icon}
            onPress={() => setVisible(!isVisible)}
          />
          <TouchableOpacity activeOpacity={0.7} style={styles.forgetview}>
            <Text style={styles.forgettext}>{strings.FORGOT_PASSWORD}</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <ButtonComp title={strings.LOGIN} />

          </TouchableOpacity>

          <View style={styles.addview}>
            <Text style={styles.notamem}>{strings.NOT_A_MEMBER}</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate(navigationStrings.CHOOSE_ACCOUNT)}
              activeOpacity={0.7}>
              <Text style={styles.joinnow}>{strings.JOIN_NOW}</Text>
            </TouchableOpacity>
          </View>
        <TouchableOpacity onPress={handleModal}
         style={{backgroundColor:'skyblue',height:40,
         justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:'black',fontSize:18}}>{strings.CHANGE_LANGUAGE}</Text>
        </TouchableOpacity>
        <Modal isVisible={isModalvisible}>
          <TouchableOpacity style={{margin:8,backgroundColor:'white'}}>
          <ButtonComp onPress={()=>onchangeLang('fr')} title={strings.FRENCH}/>
          </TouchableOpacity>
          <TouchableOpacity style={{margin:8,backgroundColor:'green'}}>
          <ButtonComp onPress={()=>onchangeLang('ur')} title={strings.URDU}/>
          </TouchableOpacity>
          <TouchableOpacity  style={{margin:8,backgroundColor:'red'}}>
          <ButtonComp onPress={()=>onchangeLang('en')} title={strings.ENGLISH}/>
          </TouchableOpacity>

          <TouchableOpacity style={{margin:8,backgroundColor:'skyblue'}}>
            <ButtonComp title={strings.HIDE} onPress={handleModal} />
          </TouchableOpacity>
        </Modal>

        </View>
      </View>
    </WrapperContainer>


  )
}

export default Login