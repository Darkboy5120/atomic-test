import React from 'react';
import {Image} from 'react-native';
import styles from './styles';

function CustomImage({source, style}) {
  return <Image source={source} style={[styles.small, style]} />;
}

export default CustomImage;
