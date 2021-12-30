import React, {useState} from 'react';
import {View, ViewStyle, StyleSheet, Button, Text} from 'react-native';
import CircularIndicator from '../components/CircularIndicator';
import {convertHeight} from '../utils/dimensions';
import {TimeType} from '../types/time';
import TemperatureModal from '../components/TemperatureModal';
import TimeModal from '../components/TimeModal';
import RoundButton from "../components/RoundButton";

interface TestScreenProps {
  style?: ViewStyle;
}

const TestScreen: React.FC<TestScreenProps> = ({style = {}}) => {
  const [temperature, setTemperature] = useState(0);
  const [time, setTime] = useState<TimeType>({
    hours: 0,
    minutes: 0,
  });
  const [tempModalVisible, setTempModalVisible] = useState(false);
  const [timeModalVisible, setTimeModalVisible] = useState(false);

  const handleChange = (value: number) => {
    setTemperature(Math.round(value));
  };

  return (
    <View style={StyleSheet.flatten([styles.container, style])}>
      <CircularIndicator onChange={handleChange} value={temperature} />

      <Text
        style={
          styles.timeText
        }>{`Время:  ${time.hours} ч  ${time.minutes} мин`}</Text>

      <View style={styles.buttonsContainer}>
        <RoundButton
          title="Задать температуру"
          onPress={() => setTempModalVisible(true)}
        />
        <RoundButton
          title="Задать время"
          onPress={() => setTimeModalVisible(true)}
        />
        <TemperatureModal
          isVisible={tempModalVisible}
          onClose={() => setTempModalVisible(false)}
          onConfirmPress={setTemperature}
          value={temperature}
        />
        <TimeModal
          value={time}
          onConfirmPress={setTime}
          isVisible={timeModalVisible}
          onClose={() => setTimeModalVisible(false)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: convertHeight(32),
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
  },
  buttonsContainer: {
    height: convertHeight(100),
    justifyContent: 'space-between',
    marginTop: convertHeight(72),
  },
  timeText: {
    marginVertical: convertHeight(16),
  },
});

export default TestScreen;
