import React, {useState} from 'react';
import {View, ViewStyle, StyleSheet, Text} from 'react-native';
import {convertHeight, convertWidth} from '../utils/dimensions';
import Modal from 'react-native-modal';
import Picker from '@gregfrench/react-native-wheel-picker';
import {TimeType} from '../types/time';
import RoundedButton from './RoundButton';

interface TimeModalProps {
  style?: ViewStyle;
  isVisible: boolean;
  onClose: () => void;
  onConfirmPress: (time: TimeType) => void;
  value: TimeType;
}

const TimeModal: React.FC<TimeModalProps> = ({
  style = {},
  isVisible,
  onClose,
  onConfirmPress,
  value,
}) => {
  const PickerItem = Picker.Item;
  const [time, setTime] = useState<TimeType>(value);

  const wheelHoursData = Array.from(Array(24).keys());
  const wheelMinutsData = Array.from(Array(60).keys());

  const handleHoursChanged = (hours: number) => {
    setTime({
      minutes: time.minutes,
      hours,
    });
  };

  const handleMinutsChanged = (minutes: number) => {
    setTime({
      minutes,
      hours: time.hours,
    });
  };

  const handleOkPress = () => {
    onConfirmPress(time);
    onClose();
  };

  return (
    <Modal
      isVisible={isVisible}
      style={styles.container}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}>
      <View style={StyleSheet.flatten([styles.modal, style])}>
        <Text style={styles.title}>Задайте время</Text>
        <View style={styles.row}>
          <Picker
            style={styles.wheelPicker}
            lineColor="#D9E4ED" //to set top and bottom line color (Without gradients)
            lineGradientColorFrom="#D9E4ED" //to set top and bottom starting gradient line color
            lineGradientColorTo="#D9E4ED" //to set top and bottom ending gradient
            selectedValue={time.hours}
            itemStyle={{color: 'black', fontSize: 26}}
            onValueChange={handleHoursChanged}>
            {wheelHoursData.map((value, i) => (
              <PickerItem label={`${value.toString()}`} value={i} key={i} />
            ))}
          </Picker>
          <Text style={styles.divider}>:</Text>
          <Picker
            style={styles.wheelPicker}
            lineColor="#D9E4ED" //to set top and bottom line color (Without gradients)
            lineGradientColorFrom="#D9E4ED" //to set top and bottom starting gradient line color
            lineGradientColorTo="#D9E4ED" //to set top and bottom ending gradient
            selectedValue={time.minutes}
            itemStyle={{color: 'black', fontSize: 26}}
            onValueChange={handleMinutsChanged}>
            {wheelMinutsData.map((value, i) => (
              <PickerItem label={`${value.toString()}`} value={i} key={i} />
            ))}
          </Picker>
        </View>
        <RoundedButton title="OK" onPress={handleOkPress} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: '90%',
    paddingTop: convertHeight(16),
    paddingBottom: convertHeight(32),
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: convertWidth(8),
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: convertHeight(32),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: convertHeight(32),
  },
  wheelPicker: {
    width: 50,
    height: convertHeight(100),
  },
  divider: {
    fontSize: 24,
    marginHorizontal: convertWidth(16),
  },
});

export default TimeModal;
