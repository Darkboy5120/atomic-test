import {StyleSheet} from 'react-native';
import theme from '../../../config/themes/dark';

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
  },
  containerCentered: {
    justifyContent: 'center',
  },
  containerMargin: {
    marginBottom: theme.spacing.ul,
  },
});

export default styles;
