import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { styles } from './styles';
import theme from '../../style/theme';

interface Props {
  value: string;
  onChangeText: (text: string) => void;
}

export const Input = ({ value, onChangeText }: Props) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder='Adicione uma nova tarefa'
      placeholderTextColor={theme.colors.gray300}
    />
  );
};
