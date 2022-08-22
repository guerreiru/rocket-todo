import { StyleSheet } from 'react-native';
import theme from '../../style/theme';

export const styles = StyleSheet.create({
  input: {
    backgroundColor: theme.colors.gray500,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.colors.gray700,
    borderRadius: 6,
    padding: 16,
    color: '#fff',
    flex: 1,
    height: 54,
    marginRight: 4,
  },
});
