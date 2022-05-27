import React from 'react';
import {Pressable} from 'react-native';
import CustomImage from '../../atoms/CustomImage';
import CustomText from '../../atoms/CustomText';
import CustomSection from '../../layouts/CustomSection';
import {HeaderContainer, CustomHeader} from '../../molecules/HeaderKit';
import ThisIsAtomicLabs from '../../molecules/ThisIsAtomicLabs';
import ToFormButton from '../../molecules/ToFormButton';
import styles from './styles';

function MoveToButton() {
  return (
    <Pressable style={styles.moveToButtonContainer}>
      <CustomImage
        size={50}
        source={require('../../../images/Group4013.png')}
      />
      <CustomText>Quiero saber más</CustomText>
      <CustomImage
        style={styles.image}
        height={300}
        width={350}
        source={require('../../../images/Group4032.png')}
      />
      <ToFormButton />
    </Pressable>
  );
}

function Welcome() {
  return (
    <CustomSection>
      <ThisIsAtomicLabs />
      <HeaderContainer margin={false}>
        <CustomHeader xl>Desarrolla todo</CustomHeader>
        <CustomHeader xl contrast>
          {' '}
          tu POTENCIAL
        </CustomHeader>
        <CustomHeader xl> dentro del equipo</CustomHeader>
        <CustomHeader xl contrast>
          {' '}
          ATOMIC
        </CustomHeader>
        <CustomHeader xl>LABS</CustomHeader>
      </HeaderContainer>
      <MoveToButton />
    </CustomSection>
  );
}

export default Welcome;
