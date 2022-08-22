import { StyleSheet } from 'react-native';
import theme from '../../style/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: theme.colors.gray400,
    borderWidth: 1,
    marginBottom: 8,
    padding: 12,
    borderRadius: 8,
  },
  cardText: {
    fontFamily: 'Inter_400Regular',
    fontWeight: '400',
    fontSize: 14,
    lineWeight: 20,
  },
});
