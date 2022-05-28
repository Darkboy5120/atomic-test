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
import {useNavigation, useRoute} from '@react-navigation/native';

function sendPhone(navigation, form, params) {
  form.submit.setLoading(true);
  setTimeout(() => {
    console.log('firstname =>', params.firstname);
    console.log('lastname =>', params.lastname);
    console.log('phone =>', form.phone.value);
    form.submit.setLoading(false);
    navigation.navigate('FormSuccess');
  }, 2000);
}

function Form() {
  const navigation = useNavigation();
  const route = useRoute();
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
        onPress={() => sendPhone(navigation, form, route.params)}
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
            resizeMode="contain"
            style={styles.background1}
            source={HomeBackgroundImage}
          />
          <ThisIsAtomicLabs />
          <FormProgress step={2} />
          <CustomText style={styles.fooMarginBottom}>
            Necesitamos validar tu número para empezar
          </CustomText>
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
