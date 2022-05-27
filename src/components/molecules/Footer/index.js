import React from 'react';
import CustomLink from '../../atoms/CustomLink';
import CustomText from '../../atoms/CustomText';
import CustomImage from '../../atoms/CustomImage';
import CustomFlex from '../../layouts/CustomFlex';
import theme from '../../../config/themes/dark';
import styles from './styles';

function Footer() {
  return (
    <CustomFlex style={styles.container}>
      <CustomText color={theme.color.other2}>
        © 2020 AtomicLabs. Todos los derechos reservados
      </CustomText>
      <CustomLink target="#">Aviso de privacidad</CustomLink>
      <CustomFlex row style={styles.socialContainer}>
        <CustomImage source={require('../../../images/linkedin.png')} />
        <CustomImage source={require('../../../images/twitter.png')} />
      </CustomFlex>
    </CustomFlex>
  );
}

export default Footer;
