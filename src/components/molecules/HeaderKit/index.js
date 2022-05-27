import React from 'react';
import theme from '../../../config/themes/dark';
import CustomText from '../../atoms/CustomText';
import CustomFlex from '../../layouts/CustomFlex';
import styles from './styles';

export function HeaderContainer({children}) {
  return (
    <CustomFlex row style={styles.container}>
      {children}
    </CustomFlex>
  );
}

export function CustomHeader({children, contrast}) {
  const color = contrast ? theme.color.p1 : theme.color.p2;
  return (
    <CustomText color={color} l bold center>
      {children}
    </CustomText>
  );
}
