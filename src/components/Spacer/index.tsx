import { View, Text } from 'react-native';
import React from 'react';

interface Props {
  children: React.ReactNode;
  padding?: string;
  paddingHorizontal?: number;
  paddingVertical?: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;

  margin?: string;
  marginHorizontal?: number;
  marginVertical?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
}

export default function Spacer({ children, ...props }: Props) {
  return <View style={{ ...props }}>{children}</View>;
}
