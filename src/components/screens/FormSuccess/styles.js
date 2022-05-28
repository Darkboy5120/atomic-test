import {StyleSheet} from 'react-native';
import theme from '../../../config/themes/dark';

const styles = StyleSheet.create({
  background1: {
    position: 'absolute',
    width: '200%',
    height: '200%',
  },
  fooMarginBottom: {
    marginBottom: theme.spacing.xl,
  },
});

export default styles;
