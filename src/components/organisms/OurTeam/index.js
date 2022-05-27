import React from 'react';
import CustomSection from '../../layouts/CustomSection';
import TeamCard from '../../molecules/TeamCard';
import {HeaderContainer, CustomHeader} from '../../molecules/HeaderKit';

function OurTeam() {
  return (
    <CustomSection>
      <HeaderContainer>
        <CustomHeader>NUESTRO</CustomHeader>
        <CustomHeader contrast> EQUIPO</CustomHeader>
      </HeaderContainer>
      <TeamCard name="Ramón Gómez" role="Front-end Developer" />
      <TeamCard name="Ximena Mejía" role="UX Designer" />
      <TeamCard name="Jaime Domínguez" role="Back-end developer" />
    </CustomSection>
  );
}

export default OurTeam;
