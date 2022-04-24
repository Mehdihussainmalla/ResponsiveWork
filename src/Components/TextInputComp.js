import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import FontFamily from '../styles/FontFamily';

const TextInputcomponent = ({
    placeHolder = '',
    onChangetext = () => { },
    label = '',
    container = {},
    rightIcon,
    onPress,
    ...props
}) => {

    return (
        <View style={{ ...styles.container, ...container }}>
            <Text style={styles.labelstyle}>{label}</Text>

            <View style={styles.flexview}>

                <TextInput style={styles.input}
                    onChangeText={onChangetext}
                    placeholder={placeHolder}
                    {...props} />
                {!!rightIcon ? <TouchableOpacity  onPress={onPress}
                activeOpacity={0.8}>
                    <Image source={rightIcon}
                     />
                </TouchableOpacity> : null}

            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderRadius: moderateScale(4)
    },


    input: {
        padding: moderateVerticalScale(4),
        fontSize: scale(14)

    },
    labelstyle: {
        fontSize: scale(16),
        padding: moderateVerticalScale(8),
        fontFamily: FontFamily.mulishBold,
        

    },
    flexview:{ 
        flexDirection: 'row',
    justifyContent:'space-between',
      alignContent:'space-between', 
    alignItems: 'center' 
}
});
export default TextInputcomponent
