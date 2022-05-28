import React, {useState, useEffect} from 'react';
import CustomSection from '../../layouts/CustomSection';
import TeamCard from '../../molecules/TeamCard';
import {HeaderContainer, CustomHeader} from '../../molecules/HeaderKit';
import {ActivityIndicator} from 'react-native';

function getTeamMates(setData) {
  const mockData = [
    {name: 'Ramón Gómez', role: 'Front-end developer'},
    {name: 'Ximena Mejía', role: 'UX Designer'},
    {name: 'Jaime Domínguez', role: 'Back-end developer'},
  ];
  setTimeout(() => setData(mockData), 3000);
}

function OurTeam() {
  const [data, setData] = useState();
  useEffect(() => getTeamMates(setData), []);
  return data ? (
    <CustomSection>
      <HeaderContainer>
        <CustomHeader>NUESTRO</CustomHeader>
        <CustomHeader contrast> EQUIPO</CustomHeader>
      </HeaderContainer>
      {data.map(item => {
        return <TeamCard key={item.name} name={item.name} role={item.role} />;
      })}
    </CustomSection>
  ) : (
    <ActivityIndicator size="large" />
  );
}

export default OurTeam;
