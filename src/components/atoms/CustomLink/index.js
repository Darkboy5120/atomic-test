import React from 'react';
import CustomText from '../CustomText';
import styles from './styles';

function CustomLink({children}) {
  return <CustomText style={styles.link}>{children}</CustomText>;
}

export default CustomLink;
