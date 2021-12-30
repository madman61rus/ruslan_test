import React from 'react';
import {ViewStyle, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {convertWidth, convertHeight} from '../utils/dimensions';

interface RoundButtonProps {
  style?: ViewStyle;
  title: string;
  onPress: () => void;
}

const RoundButton: React.FC<RoundButtonProps> = ({
  style = {},
  title,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={StyleSheet.flatten([styles.container, style])}
      onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#407EA0',
    paddingVertical: convertHeight(8),
    paddingHorizontal: convertWidth(16),
    borderRadius: convertWidth(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    color: 'white',
  },
});

export default RoundButton;
