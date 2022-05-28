import {StyleSheet} from 'react-native';
import theme from '../../../config/themes/dark';

const styles = StyleSheet.create({
  container: {
    marginBottom: theme.spacing.l,
  },
  inputContainer: {
    marginTop: theme.spacing.s,
  },
  input: {
    backgroundColor: theme.color.p2,
    borderRadius: 5,
    width: '100%',
    paddingHorizontal: theme.spacing.l,
    fontSize: theme.font.m,
    paddingRight: '15%',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  inputError: {
    borderColor: theme.color.danger,
  },
  inputIcon: {
    position: 'absolute',
    right: theme.spacing.xl,
    zIndex: 1,
    alignSelf: 'center',
    tintColor: theme.color.other1,
  },
  log: {
    color: theme.color.danger,
  },
});

export default styles;
