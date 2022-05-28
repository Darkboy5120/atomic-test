import React from 'react';
import {View, ScrollView} from 'react-native';
import CustomImage from '../../atoms/CustomImage';
import Footer from '../../molecules/Footer';
import styles from './styles';
import HomeBackgroundImage from '../../../images/MaskGroup1.png';
import CustomSection from '../../layouts/CustomSection';
import ThisIsAtomicLabs from '../../molecules/ThisIsAtomicLabs';
import {HeaderContainer, CustomHeader} from '../../molecules/HeaderKit';
import CustomText from '../../atoms/CustomText';

function FormSuccess() {
  return (
    <View>
      <ScrollView>
        <CustomSection>
          <CustomImage
            style={styles.background1}
            source={HomeBackgroundImage}
          />
          <ThisIsAtomicLabs />
          <HeaderContainer>
            <CustomHeader>TUS DATOS HAN SIDO</CustomHeader>
            <CustomHeader contrast> ENVIADOS CON ÉXITO</CustomHeader>
          </HeaderContainer>
          <CustomText style={styles.fooMarginBottom}>
            En breve recibiras un correo de confirmación por parte del equipo de
            AtomicLabs
          </CustomText>
          <CustomText>
            Recuerda revisar tu bandeja de SPAM ¡Esperamos verte pronto!
          </CustomText>
          <CustomImage
            resizeMode="stretch"
            width="100%"
            height={400}
            source={require('../../../images/Group4039.png')}
          />
        </CustomSection>
        <Footer />
      </ScrollView>
    </View>
  );
}

export default FormSuccess;
