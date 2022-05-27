import {useNavigation} from '@react-navigation/native';
import React from 'react';
import CustomButton from '../../atoms/CustomButton';

function ToFormButton({style, center}) {
  const navigation = useNavigation();
  return (
    <CustomButton
      center={center}
      style={style}
      title="¡Quiero saber más!"
      onPress={() => navigation.navigate('FormStep1')}
    />
  );
}

export default ToFormButton;
