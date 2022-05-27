import React from 'react';
import CustomFlex from '../../layouts/CustomFlex';
import styles from './styles';

function CustomProgressBar({progress = '0%'}) {
  const widthStyle = {width: progress};
  return (
    <CustomFlex style={styles.container}>
      <CustomFlex style={[styles.progress, widthStyle]} />
    </CustomFlex>
  );
}

export default CustomProgressBar;
