import React from 'react';
import {View, ScrollView} from 'react-native';
import ThisIsAtomicLabs from '../../molecules/ThisIsAtomicLabs';
import CustomImage from '../../atoms/CustomImage';
import styles from './styles';
import HomeBackgroundImage from '../../../images/MaskGroup1.png';
import Footer from '../../molecules/Footer';
import FormProgress from '../../molecules/FormProgress';
import CustomText from '../../atoms/CustomText';
import CustomSection from '../../layouts/CustomSection';

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
          <FormProgress step={2} />
          <CustomText>
            Queremos saber que eres tú, por favor ingresa los siguientes datos:
          </CustomText>
        </CustomSection>
        <Footer />
      </ScrollView>
    </View>
  );
}

export default FormStep1;
