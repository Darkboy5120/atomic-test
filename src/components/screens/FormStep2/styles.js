import {StyleSheet} from 'react-native';
import theme from '../../../config/themes/dark';

const styles = StyleSheet.create({
  background1: {
    position: 'absolute',
    left: '-110%',
    top: 130,
    width: '400%',
    height: '110%',
    transform: [{rotate: '90deg'}],
  },
  fooMarginBottom: {
    marginBottom: theme.spacing.xl,
  },
  background2: {
    width: '100%',
    height: 400,
  },
  formContainer: {
    marginTop: theme.spacing.xl,
  },
});

export default styles;
