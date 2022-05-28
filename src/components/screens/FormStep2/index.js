import React, {useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import ThisIsAtomicLabs from '../../molecules/ThisIsAtomicLabs';
import CustomImage from '../../atoms/CustomImage';
import styles from './styles';
import HomeBackgroundImage from '../../../images/MaskGroup1.png';
import Footer from '../../molecules/Footer';
import FormProgress from '../../molecules/FormProgress';
import CustomText from '../../atoms/CustomText';
import CustomSection from '../../layouts/CustomSection';
import CustomFlex from '../../layouts/CustomFlex';
import CustomInput from '../../atoms/CustomInput';
import useFormStep2 from '../../../CustomHooks/useFormStep2';
import CustomButton from '../../atoms/CustomButton';

function Form() {
  const form = useFormStep2();
  useEffect(() => {
    const formIsOk = !form.phone.ok;
    form.submit.setOk(!formIsOk);
  }, [form]);
  return (
    <CustomFlex style={styles.formContainer}>
      <CustomInput label="Número de Celular" {...form.phone} />
      <CustomButton
        {...form.submit}
        center
        title="Continuar"
        type="submit"
        onPress={() => {
        }}
      />
    </CustomFlex>
  );
}

function FormStep2() {
  return (
    <View>
      <ScrollView>
        <CustomSection>
          <CustomImage
            resizeMode="stretch"
            style={styles.background1}
            source={HomeBackgroundImage}
          />
          <ThisIsAtomicLabs />
          <FormProgress step={2} />
          <CustomText>Necesitamos validar tu número para empezar</CustomText>
          <CustomText>
            Ingresa tu número a 10 dígitos y te enviaremos un código SMS
          </CustomText>
          <Form />
          <CustomImage
            resizeMode="contain"
            style={styles.background2}
            source={require('../.././../images/Group4034.png')}
          />
        </CustomSection>
        <Footer />
      </ScrollView>
    </View>
  );
}

export default FormStep2;
