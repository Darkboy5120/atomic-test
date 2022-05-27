import React from 'react';
import CustomText from '../CustomText';
import {View} from 'react-native';
import styles from './styles';

function CustomLink({children}) {
  return (
    <View style={styles.container}>
      <CustomText style={styles.link}>{children}</CustomText>
    </View>
  );
}

export default CustomLink;
