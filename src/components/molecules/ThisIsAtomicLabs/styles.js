import {StyleSheet} from 'react-native';
import theme from '../../../config/themes/dark';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginBottom: theme.spacing.xxl,
  },
  icon: {
    transform: [{rotate: '-45deg'}],
  },
  fooLine: {
    backgroundColor: theme.color.p2,
    width: 1,
    marginRight: theme.spacing.s,
  },
});

export default styles;
