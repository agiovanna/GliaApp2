import React from 'react';
import { Text as RNText, TextStyle } from 'react-native';

interface TextProps {
  text: string;
  style?: TextStyle;
}

const Text: React.FC<TextProps> = ({ text, style }) => {
  return <RNText style={style}>{text}</RNText>;
};

export default Text;
