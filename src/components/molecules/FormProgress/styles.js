import {StyleSheet} from 'react-native';
import theme from '../../../config/themes/dark';

const styles = StyleSheet.create({
  dotProgress: {
    marginBottom: theme.spacing.m,
    display: 'flex',
    alignItems: 'center',
    flex: 1,
  },
  detailsContainer: {
    marginBottom: theme.spacing.xxl,
  },
  detailsDotContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsTextContainer: {
    height: '100%',
    alignContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
