import {StyleSheet} from 'react-native';
import theme from '../../../config/themes/dark';

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: theme.color.p2,
    borderRadius: 15,
    padding: theme.spacing.l,
  },
  disabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: theme.color.s1,
  },
  submitContainer: {
    backgroundColor: theme.color.p1,
    borderRadius: 100,
    padding: theme.spacing.m,
  },
  submitText: {
    color: theme.color.p2,
  },
});

export default styles;
