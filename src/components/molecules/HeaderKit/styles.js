import {StyleSheet} from 'react-native';
import theme from '../../../config/themes/dark';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  containerMargin: {
    marginBottom: theme.spacing.ul,
  },
});

export default styles;
