import React from 'react';
import CustomFlex from '../../layouts/CustomFlex';
import CustomText from '../CustomText';
import CustomIcon from '../CustomIcon';
import styles from './styles';

function Flow({children, arrow = true, flex = 2}) {
  return (
    <CustomFlex row flex={flex} style={styles.container}>
      <CustomFlex flex={7}>
        <CustomText center s>
          {children}
        </CustomText>
      </CustomFlex>
      {arrow ? (
        <CustomFlex flex={2}>
          <CustomIcon size={18} name="arrow-forward-outline" />
        </CustomFlex>
      ) : null}
    </CustomFlex>
  );
}

function RightFlow({items}) {
  return (
    <CustomFlex row flex={1} style={styles.container}>
      <Flow flex={3}>Contratación remota</Flow>
      <Flow flex={4}>Entrevista con el área de RH</Flow>
      <Flow>Prueba práctica</Flow>
      <Flow arrow={false}>Entrevista técnica</Flow>
    </CustomFlex>
  );
}

export default RightFlow;
