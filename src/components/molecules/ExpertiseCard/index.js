import React from 'react';
import CustomFlex from '../../layouts/CustomFlex';
import CustomText from '../../atoms/CustomText';
import styles from './styles';
import CustomIcon from '../../atoms/CustomIcon';
import theme from '../../../config/themes/dark';
import CustomImage from '../../atoms/CustomImage';

function FooLine() {
  return (
    <CustomFlex row style={styles.fooLineContainer}>
      <CustomFlex style={styles.fooLineItem} flex={10} />
      <CustomFlex style={[styles.fooLineItem, styles.fooLineCenter]} flex={2} />
      <CustomFlex style={styles.fooLineItem} flex={10} />
    </CustomFlex>
  );
}

function DotIcon({style, size = theme.font.m, color = theme.color.p2}) {
  return <CustomIcon style={style} size={size} name="ellipse" color={color} />;
}

function ListItem({children}) {
  return (
    <CustomFlex row style={styles.listItemContainer}>
      <DotIcon style={styles.dotIcon} size={theme.font.s} />
      {children}
    </CustomFlex>
  );
}

function BottomDots() {
  return (
    <CustomFlex row style={styles.bottomDotsContainer}>
      <DotIcon style={styles.dotIcon} color={theme.color.p1} />
      <DotIcon style={styles.dotIcon} />
      <DotIcon style={styles.dotIcon} />
    </CustomFlex>
  );
}

function ExpertiseCard() {
  return (
    <CustomFlex>
      <CustomFlex style={styles.container}>
        <CustomImage
          size={180}
          source={require('../../../images/Group4036.png')}
        />
        <FooLine />
        <CustomText style={styles.header} l bold>
          IMAGINA
        </CustomText>
        <CustomFlex style={styles.listContainer}>
          <ListItem>
            <CustomText bold>Estrategia</CustomText>
            <CustomText> Digital</CustomText>
          </ListItem>
          <ListItem>
            <CustomText>Big Data &</CustomText>
            <CustomText bold> Analysis</CustomText>
          </ListItem>
          <ListItem>
            <CustomText bold>Consultoría</CustomText>
            <CustomText> Tecnológica</CustomText>
          </ListItem>
          <ListItem>
            <CustomText bold>Reducción</CustomText>
            <CustomText> de costos TI</CustomText>
          </ListItem>
        </CustomFlex>
      </CustomFlex>
      <BottomDots />
    </CustomFlex>
  );
}

export default ExpertiseCard;
