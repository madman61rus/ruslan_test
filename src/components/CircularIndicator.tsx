import React from 'react';
import {View, ViewStyle, StyleSheet, Text} from 'react-native';
import CircularPicker from 'react-native-circular-picker';
import {convertWidth} from '../utils/dimensions';

interface CircularIndicatorProps {
  style?: ViewStyle;
  onChange: (value: number) => void;
  value: number;
}

const CircularIndicator: React.FC<CircularIndicatorProps> = ({
  style = {},
  onChange,
  value,
}) => {
  return (
    <View style={StyleSheet.flatten([styles.container, style])}>
      <CircularPicker
        size={200}
        defaultPos={value}
        steps={[0, 100]}
        backgroundColor="#EDEDED"
        gradients={{
          0: ['#FFFAC5', '#B7AA1A'],
        }}
        strokeWidth={convertWidth(8)}
        onChange={onChange}>
        <View style={styles.row}>
          <Text style={styles.valueText}>{value}</Text>
          <Text style={styles.temperatureText}> ° C</Text>
        </View>
      </CircularPicker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  valueText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
  },
  temperatureText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
    color: 'grey',
  },
  row: {
    flexDirection: 'row',
  },
});

export default CircularIndicator;
