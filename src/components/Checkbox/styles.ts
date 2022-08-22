import { StyleSheet } from 'react-native';
import theme from '../../style/theme';

export const styles = StyleSheet.create({
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: theme.colors.blue,
    backgroundColor: 'transparent',
  },

  checkboxChecked: {
    backgroundColor: theme.colors.purple,
    borderColor: theme.colors.purple,
  },
});
