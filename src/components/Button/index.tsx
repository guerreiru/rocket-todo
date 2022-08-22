import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles';

interface Props {
  onPress: () => void;
}

export const Button = ({ onPress }: Props) => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <AntDesign name='pluscircleo' size={18} color='#fff' />
    </TouchableOpacity>
  );
};
