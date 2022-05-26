import {StyleSheet} from 'react-native';
import theme from '../../../config/themes/dark';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.color.s2,
    height: 150,
    padding: theme.spacing.xl,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  socialContainer: {
    justifyContent: 'space-between',
    width: 60,
  },
});

export default styles;
