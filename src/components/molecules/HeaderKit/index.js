import React from 'react';
import theme from '../../../config/themes/dark';
import CustomText from '../../atoms/CustomText';
import CustomFlex from '../../layouts/CustomFlex';
import styles from './styles';

export function HeaderContainer({children, margin = true}) {
  const marginStyle = margin ? styles.containerMargin : null;
  return (
    <CustomFlex row style={[styles.container, marginStyle]}>
      {children}
    </CustomFlex>
  );
}

export function CustomHeader({children, contrast, xl}) {
  const isXL = xl ? true : false;
  const headerSizes = {l: !isXL, xl: isXL};
  const color = contrast ? theme.color.p1 : theme.color.p2;
  return (
    <CustomText color={color} l bold center {...headerSizes}>
      {children}
    </CustomText>
  );
}
