import React, {useState} from 'react';
import {TextInput} from 'react-native';
import CustomFlex from '../../layouts/CustomFlex';
import CustomImage from '../CustomImage';
import CustomText from '../CustomText';
import styles from './styles';

function createUpdateInput(setLog, setOk) {
  return (ok, log = '') => {
    setLog(log);
    setOk(ok);
  };
}

function checkValidation(text, validation, logName, setLog, setOk) {
  const updateInput = createUpdateInput(setLog, setOk);
  const {regex, min, max} = validation;
  const length = text.length;
  if (length === 0) {
    updateInput(false, `${logName} no debe estar vacío`);
  } else if (length < min) {
    updateInput(false, `${logName} debera tener mínimo ${min} caracteres`);
  } else if (length > max) {
    updateInput(false, `${logName} debera tener maximo ${min} caracteres`);
  } else if (text.match(regex)) {
    updateInput(false, `${logName} no tiene el formato apropiado`);
  } else {
    updateInput(true);
  }
}

function CustomInput({value, setValue, ok, setOk, label, validation, logName}) {
  const [log, setLog] = useState('');
  const errorStyle = ok === false ? styles.inputError : null;
  return (
    <CustomFlex style={styles.container}>
      <CustomText>{label}</CustomText>
      <CustomFlex row style={styles.inputContainer}>
        <CustomImage
          style={styles.inputIcon}
          size={20}
          resizeMode="contain"
          source={require('../../../images/ic_lock_24px.png')}
        />
        <TextInput
          value={value}
          style={[styles.input, errorStyle]}
          onChangeText={text => {
            checkValidation(text, validation, logName, setLog, setOk);
            setValue(text);
          }}
        />
      </CustomFlex>
      <CustomText style={styles.log}>{log}</CustomText>
    </CustomFlex>
  );
}

export default CustomInput;
