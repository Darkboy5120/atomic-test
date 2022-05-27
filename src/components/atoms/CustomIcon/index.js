import React from 'react';
import CustomText from '../CustomText';
import theme from '../../../config/themes/dark';
import Icon from 'react-native-vector-icons/Ionicons';

function CustomIcon({style, name, color = theme.color.p1, size = 30}) {
  return (
    <CustomText style={style}>
      <Icon name={name} size={size} color={color} />
    </CustomText>
  );
}

export default CustomIcon;
