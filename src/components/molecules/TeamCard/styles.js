import {StyleSheet} from 'react-native';
import theme from '../../../config/themes/dark';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.color.s1,
    marginBottom: theme.spacing.xxl,
    borderRadius: 5,
    padding: theme.spacing.xl,
    alignItems: 'center',
  },
  name: {
    color: theme.color.p2,
  },
  role: {
    color: theme.color.p2,
  },
  fakeImage: {
    height: 120,
    width: 120,
    backgroundColor: theme.color.p2,
    borderRadius: 100,
    marginBottom: theme.spacing.xl,
  },
});

export default styles;
