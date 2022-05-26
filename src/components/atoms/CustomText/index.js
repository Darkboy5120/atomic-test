import React from 'react';
import theme from '../../../config/themes/dark';
import {Text} from 'react-native';
import styles from './styles';

function CustomText({style, children, s, l, xl, xxl, color}) {
  const colorStyle = color ?? theme.color.p2;
  const {font} = theme;
  let fontSize = font.m;
  fontSize = s ? font.s : null;
  fontSize = l ? font.l : null;
  fontSize = xl ? font.xl : null;
  fontSize = xxl ? font.xxl : null;
  const textStyle = [fontSize, colorStyle, styles.text, style];
  return <Text style={textStyle}>{children}</Text>;
}

export default CustomText;
