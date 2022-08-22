import { Dimensions, StyleSheet } from 'react-native';
import theme from '../style/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  header: {
    alignItems: 'center',
    backgroundColor: theme.colors.gray700,
    padding: 24,
    position: 'relative',
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: -25,
  },
  content: {
    flex: 1,
    backgroundColor: theme.colors.gray500,
    zIndex: -1,
    paddingTop: 20,
    paddingHorizontal: 24,
  },
  tasksStatus: {
    paddingTop: 32,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: theme.colors.gray400,
    borderBottomWidth: 1,
  },
  tasksContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 48,
  },
  textBody: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    lineHeight: 20,
    color: theme.colors.gray300,
  },
  textBold: {
    fontFamily: 'Inter_700Bold',
  },
});
