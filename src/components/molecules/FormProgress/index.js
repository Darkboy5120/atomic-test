import React from 'react';
import CustomFlex from '../../layouts/CustomFlex';
import DotOne from '../../../images/Group4014.png';
import DotTwoOutline from '../../../images/Group4019.png';
import DotTwoOutlineActive from '../../../images/Group4020.png';
import DotCheck from '../../../images/Group4016.png';
import DotTwo from '../../../images/Group4023.png';
import CustomImage from '../../atoms/CustomImage';
import {HeaderContainer, CustomHeader} from '../../molecules/HeaderKit';
import CustomSection from '../../layouts/CustomSection';
import CustomProgressBar from '../../atoms/CustomProgressBar';
import styles from './styles';

function getFormData(step) {
  return step === 1
    ? [
        DotOne,
        DotTwoOutline,
        DotOne,
        <HeaderContainer center={false} style={styles.detailsTextContainer}>
          <CustomHeader>TE QUEREMOS</CustomHeader>
          <CustomHeader contrast> CONOCER</CustomHeader>
        </HeaderContainer>,
        '33%',
      ]
    : [
        DotCheck,
        DotTwoOutlineActive,
        DotTwo,
        <HeaderContainer center={false} style={styles.detailsTextContainer}>
          <CustomHeader>VALIDA TU</CustomHeader>
          <CustomHeader contrast> CELULAR</CustomHeader>
        </HeaderContainer>,
        '100%',
      ];
}

function FormProgress({step = 1}) {
  const [step1Label, step2Label, dotDetails, detailsText, progress] =
    getFormData(step);
  return (
    <CustomSection>
      <CustomFlex row>
        <CustomFlex style={styles.dotProgress}>
          <CustomImage size={30} source={step1Label} />
        </CustomFlex>
        <CustomFlex style={styles.dotProgress}>
          <CustomImage size={30} source={step2Label} />
        </CustomFlex>
      </CustomFlex>
      <CustomProgressBar progress={progress} />
      <CustomFlex row flex={1} style={styles.detailsContainer}>
        <CustomFlex flex={3} style={styles.detailsDotContainer}>
          <CustomImage size={40} source={dotDetails} />
        </CustomFlex>
        <CustomFlex flex={10}>{detailsText}</CustomFlex>
      </CustomFlex>
    </CustomSection>
  );
}

export default FormProgress;
