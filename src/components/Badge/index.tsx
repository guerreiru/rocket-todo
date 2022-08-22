import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { styles } from './styles';
import theme from '../../style/theme';

interface Props {
  value: number;
}

export const Badge = ({ value }: Props) => {
  return (
    <View style={styles.badge}>
      <Text style={styles.badgeText}>{value}</Text>
    </View>
  );
};
