import {StyleSheet} from 'react-native';
import theme from '../../../config/themes/dark';

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.xl,
    alignItems: 'center',
    backgroundColor: theme.color.p1,
    borderRadius: 10,
    marginBottom: theme.spacing.xxl,
  },
  fooLineContainer: {
    height: 2,
    width: 120,
  },
  fooLineItem: {
    backgroundColor: theme.color.p2,
  },
  fooLineCenter: {
    marginHorizontal: theme.spacing.m,
  },
  listItemContainer: {
    alignItems: 'center',
    marginBottom: theme.spacing.l,
  },
  bottomDotsContainer: {
    alignSelf: 'center',
    marginBottom: theme.spacing.xl,
  },
  dotIcon: {
    paddingRight: theme.spacing.l,
  },
  listContainer: {
    alignContent: 'flex-start',
  },
  header: {
    paddingBottom: theme.spacing.xl,
  },
});

export default styles;
