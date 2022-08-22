import { StyleSheet } from 'react-native';
import theme from '../../style/theme';

export const styles = StyleSheet.create({
  badge: {
    borderRadius: 50,
    backgroundColor: theme.colors.gray400,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginLeft: 8,
  },
  badgeText: {
    color: theme.colors.gray200,
    fontFamily: 'Inter_700Bold',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 15,
  },
});
