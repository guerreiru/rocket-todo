import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { Badge } from '../Badge';
import theme from '../../style/theme';

interface Props {
  value: number;
  label: string;
}

export const TextStatus = ({ label, value }: Props) => {
  return (
    <View style={styles.tasksStatusWrapper}>
      <Text
        style={[
          styles.tasksStatusText,
          {
            color:
              label === 'Criadas' ? theme.colors.blue : theme.colors.purple,
          },
        ]}
      >
        {label}
      </Text>
      <Badge value={value} />
    </View>
  );
};
