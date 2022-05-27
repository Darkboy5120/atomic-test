import React from 'react';
import theme from '../../../config/themes/dark';
import {Text} from 'react-native';
import styles from './styles';

function CustomText({style, children, s, l, xl, xxl, color, bold, center}) {
  const colorStyle = {color: color ?? theme.color.p2};
  const boldStyle = bold ? {fontWeight: 'bold'} : null;
  const centerStyle = center ? {textAlign: 'center'} : null;
  const {font} = theme;
  let fontSize = font.m;
  fontSize = s ? font.s : fontSize;
  fontSize = l ? font.l : fontSize;
  fontSize = xl ? font.xl : fontSize;
  fontSize = xxl ? font.xxl : fontSize;
  const textStyle = [
    {fontSize},
    colorStyle,
    styles.text,
    boldStyle,
    centerStyle,
    style,
  ];
  return <Text style={textStyle}>{children}</Text>;
}

export default CustomText;
