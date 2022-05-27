import React from 'react';
import CustomIcon from '../../atoms/CustomIcon';
import CustomText from '../../atoms/CustomText';
import CustomFlex from '../../layouts/CustomFlex';
import theme from '../../../config/themes/dark';
import styles from './styles';

function ThisIsAtomicLabs() {
  return (
    <CustomFlex style={styles.container} flex={1} row>
      <CustomIcon
        color={theme.color.p2}
        style={styles.icon}
        name="rocket-outline"
      />
      <CustomFlex style={styles.fooLine} />
      <CustomText>atomicLabs</CustomText>
    </CustomFlex>
  );
}

export default ThisIsAtomicLabs;
