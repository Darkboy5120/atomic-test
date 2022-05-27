import {StyleSheet} from 'react-native';
import theme from '../../../config/themes/dark';

const styles = StyleSheet.create({
  moveToButtonContainer: {
    display: 'flex',
    alignItems: 'center',
    marginVertical: theme.spacing.m,
  },
  image: {
    marginVertical: theme.spacing.xxl,
  },
});

export default styles;
