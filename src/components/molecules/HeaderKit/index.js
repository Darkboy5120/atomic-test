import React from 'react';
import theme from '../../../config/themes/dark';
import CustomText from '../../atoms/CustomText';
import CustomFlex from '../../layouts/CustomFlex';
import styles from './styles';

export function HeaderContainer({
  style,
  children,
  margin = true,
  center = true,
}) {
  const marginStyle = margin ? styles.containerMargin : null;
  const containerStyle = [
    center ? styles.containerCentered : '',
    styles.container,
    marginStyle,
  ];
  return (
    <CustomFlex row style={[containerStyle, style]}>
      {children}
    </CustomFlex>
  );
}

export function CustomHeader({children, contrast, xl}) {
  const isXL = xl ? true : false;
  const headerSizes = {l: !isXL, xl: isXL};
  const color = contrast ? theme.color.p1 : theme.color.p2;
  return (
    <CustomText color={color} l bold {...headerSizes}>
      {children}
    </CustomText>
  );
}
