import React from 'react';
import {Pressable, ActivityIndicator} from 'react-native';
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
  ok = true,
  loading,
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
  const disabledStyle = !ok ? styles.disabled : null;
  const buttonStyle = [
    centerStyle,
    {width},
    bgColor,
    typeStyle[0],
    textColor,
    style,
    disabledStyle,
  ];
  return (
    <Pressable
      disabled={!ok || loading}
      onPress={onPress}
      title={title}
      style={buttonStyle}>
      <CustomText style={typeStyle[1]} center bold>
        {loading ? (
          <ActivityIndicator color={theme.color.p2} size="small" />
        ) : (
          title
        )}
      </CustomText>
    </Pressable>
  );
}

export default CustomButton;
