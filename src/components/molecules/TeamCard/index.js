import React from 'react';
import CustomImage from '../../atoms/CustomImage';
import CustomText from '../../atoms/CustomText';
import CustomFlex from '../../layouts/CustomFlex';
import styles from './styles';

function TeamCard({imageSource, name, role}) {
  return (
    <CustomFlex flex={1} style={styles.container}>
      <CustomFlex flex={2}>
        <CustomFlex style={styles.fakeImage} />
        {/* <CustomImage style={styles.image} source={foo} /> */}
      </CustomFlex>
      <CustomFlex flex={1}>
        <CustomText style={styles.name} bold center>
          {name}
        </CustomText>
        <CustomText style={styles.role} center>
          {role}
        </CustomText>
      </CustomFlex>
    </CustomFlex>
  );
}

export default TeamCard;
