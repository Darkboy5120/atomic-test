import React, {useEffect, useState} from 'react';
import {View, ScrollView, Alert} from 'react-native';
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

function apiMock(firstname, lastname, phone) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('el api recibe la info');
      const apiWentWrong = Math.floor(Math.random() * 2);
      if (apiWentWrong === 0) {
        reject({log: 'error interno foo foo', code: 500});
      } else {
        resolve({log: 'todo ok', code: 200});
      }
    }, 3000);
  });
}

function sendPhone(navigation, form, params, increaseApiCount) {
  form.submit.setLoading(true);
  apiMock(params.firstname, params.lastname, form.phone.value)
    .catch(e => {
      increaseApiCount();
      Alert.alert('Error', e.log);
      return e;
    })
    .then(r => {
      form.submit.setLoading(false);
      if (r.code === 200) {
        navigation.navigate('FormSuccess');
      }
    });
}

function Form() {
  const navigation = useNavigation();
  const route = useRoute();
  const form = useFormStep2();
  const [useApiCount, setUseApiCount] = useState(0);
  useEffect(() => {
    const formIsOk = !form.phone.ok;
    form.submit.setOk(!formIsOk);
  }, [form]);
  useEffect(() => {
    if (useApiCount >= 3) {
      navigation.navigate('FormSuccess');
    }
  }, [navigation, useApiCount]);
  return (
    <CustomFlex style={styles.formContainer}>
      <CustomInput label="Número de Celular" {...form.phone} />
      <CustomButton
        {...form.submit}
        center
        title="Continuar"
        type="submit"
        onPress={() => {
          const increaseApiCount = () => setUseApiCount(useApiCount + 1);
          sendPhone(navigation, form, route.params, increaseApiCount);
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
