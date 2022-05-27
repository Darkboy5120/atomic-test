import React from 'react';
import {View, ScrollView} from 'react-native';
import CustomImage from '../../atoms/CustomImage';
import Footer from '../../molecules/Footer';
import OurTeam from '../../organisms/OurTeam';
import HomeBackgroundImage from '../../../images/MaskGroup1.png';
import WorkingWithUs from '../../organisms/WorkingWithUs';
import Expertise from '../../organisms/Expertise';
import Welcome from '../../organisms/Welcome';
import styles from './styles';

function Home() {
  return (
    <View>
      <ScrollView>
        <CustomImage
          resizeMode="stretch"
          style={styles.background1}
          source={HomeBackgroundImage}
        />
        <CustomImage style={styles.background2} source={HomeBackgroundImage} />
        <Welcome />
        <Expertise />
        <WorkingWithUs />
        <OurTeam />
        <Footer />
      </ScrollView>
    </View>
  );
}

export default Home;
