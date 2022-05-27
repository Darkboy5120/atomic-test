import React from 'react';
import {View, ScrollView} from 'react-native';
import CustomImage from '../../atoms/CustomImage';
import Footer from '../../molecules/Footer';
import OurTeam from '../../organisms/OurTeam';
import HomeBackgroundImage from '../../../images/MaskGroup1.png';
import WorkingWithUs from '../../organisms/WorkingWithUs';
import styles from './styles';

function Home() {
  return (
    <View>
      <ScrollView>
        <CustomImage style={styles.background} source={HomeBackgroundImage} />
        <WorkingWithUs />
        <OurTeam />
        <Footer />
      </ScrollView>
    </View>
  );
}

export default Home;
