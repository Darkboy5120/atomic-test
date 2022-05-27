import React from 'react';
import {HeaderContainer, CustomHeader} from '../../molecules/HeaderKit';
import CustomButton from '../../atoms/CustomButton';
import RightFlow from '../../atoms/RightFlow';
import CustomImage from '../../atoms/CustomImage';
import CustomSection from '../../layouts/CustomSection';
import styles from './styles';
import CustomFlex from '../../layouts/CustomFlex';

function WorkingWithUs() {
  return (
    <CustomSection>
      <HeaderContainer>
        <CustomHeader>¡TE ENCANTARÁ</CustomHeader>
        <CustomHeader contrast> TRABAJAR CON NOSOTROS!</CustomHeader>
      </HeaderContainer>
      <CustomImage
        width="100%"
        height={100}
        source={require('../../../images/Group4040.png')}
      />
      <RightFlow />
      <CustomFlex style={styles.fooWraper}>
        <CustomButton
          style={styles.fooMargin}
          title="¡Quiero ser parte!"
          center
        />
      </CustomFlex>
    </CustomSection>
  );
}

export default WorkingWithUs;
