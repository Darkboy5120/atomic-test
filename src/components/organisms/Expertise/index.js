import React from 'react';
import CustomSection from '../../layouts/CustomSection';
import {HeaderContainer, CustomHeader} from '../../molecules/HeaderKit';
import ExpertiseCard from '../../molecules/ExpertiseCard';

function Expertise() {
  return (
    <CustomSection>
      <HeaderContainer>
        <CustomHeader>SOMOS EL BRAZO DERECHO</CustomHeader>
        <CustomHeader contrast> DE LA TECNOLOGÍA</CustomHeader>
      </HeaderContainer>
      <ExpertiseCard />
    </CustomSection>
  );
}

export default Expertise;
