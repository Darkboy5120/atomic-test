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
import useFormStep1 from '.././../../CustomHooks/useFormStep1';
import CustomButton from '../../atoms/CustomButton';
import {useNavigation} from '@react-navigation/native';

function Form() {
  const form = useFormStep1();
  const navigation = useNavigation();
  useEffect(() => {
    const formIsOk = !form.firstname.ok || !form.lastname.ok;
    form.submit.setOk(!formIsOk);
  }, [form]);
  return (
    <CustomFlex style={styles.formContainer}>
      <CustomInput label="Nombre (s)" {...form.firstname} />
      <CustomInput label="Apellidos (s)" {...form.lastname} />
      <CustomButton
        {...form.submit}
        center
        title="Enviar"
        type="submit"
        onPress={() => {
          navigation.navigate('FormStep2', {
            firstname: form.firstname.value,
            lastname: form.lastname.value,
          });
        }}
      />
    </CustomFlex>
  );
}

function FormStep1() {
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
          <FormProgress step={1} />
          <CustomText>
            Queremos saber que eres tú, por favor ingresa los siguientes datos:
          </CustomText>
          <Form />
          <CustomImage
            resizeMode="contain"
            style={styles.background2}
            source={require('../.././../images/Group4033.png')}
          />
        </CustomSection>
        <Footer />
      </ScrollView>
    </View>
  );
}

export default FormStep1;
