import React from 'react';
import {Pressable} from 'react-native';
import CustomText from '../CustomText';
import theme from '../../../config/themes/dark';
import styles from './styles';

function CustomButton({
  style,
  title,
  bgColor,
  textColor,
  type,
  width,
  center,
  onPress,
}) {
  const typeStylesArr = {
    button: [styles.buttonContainer, styles.buttonText],
    submit: [styles.submitContainer, styles.submitText],
  };
  width = width ?? 180;
  type = type ?? 'button';
  const typeStyle = typeStylesArr[type];
  const centerStyle = center ? {alignSelf: 'center'} : null;
  bgColor = bgColor ?? {backgroundColor: theme.color.p1};
  textColor = textColor ?? {color: theme.color.s1};
  const buttonStyle = [
    centerStyle,
    {width},
    bgColor,
    typeStyle[0],
    textColor,
    style,
  ];
  return (
    <Pressable onPress={onPress} title={title} style={buttonStyle}>
      <CustomText style={typeStyle[1]} center bold>
        {title}
      </CustomText>
    </Pressable>
  );
}

export default CustomButton;
