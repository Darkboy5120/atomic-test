import React from 'react';
import {View} from 'react-native';
import styles from './styles';

function CustomFlex({style, children, row, flex}) {
  let flexStyle = row ? [styles.row] : [];
  if (flex) {
    flexStyle.push({flex});
  }
  return <View style={[styles.foo, flexStyle, style]}>{children}</View>;
}

export default CustomFlex;
