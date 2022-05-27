import {StyleSheet} from 'react-native';
import theme from '../../../config/themes/dark';

const styles = StyleSheet.create({
  container: {
    height: 12,
    backgroundColor: theme.color.p2,
    borderRadius: 100,
  },
  progress: {
    backgroundColor: theme.color.p1,
    borderRadius: 100,
    height: '100%',
  },
});

export default styles;
