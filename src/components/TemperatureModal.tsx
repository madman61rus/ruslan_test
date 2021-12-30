import React, {useState, useEffect} from 'react';
import {View, ViewStyle, StyleSheet, Text, Button} from 'react-native';
import {convertHeight, convertWidth} from '../utils/dimensions';
import Modal from 'react-native-modal';
import RoundedButton from '../components/RoundButton';
import Picker from '@gregfrench/react-native-wheel-picker';

interface TemperatureModalProps {
  style?: ViewStyle;
  isVisible: boolean;
  onClose: () => void;
  value: number;
  onConfirmPress: (value: number) => void;
}

const TemperatureModal: React.FC<TemperatureModalProps> = ({
  style = {},
  isVisible,
  onClose,
  value,
  onConfirmPress,
}) => {
  const [temperature, setTemperature] = useState(value);
  const PickerItem = Picker.Item;

  useEffect(() => {
    setTemperature(value);
  }, [value]);

  const wheelPickerData = Array.from(Array(100).keys());

  const handleOkPress = () => {
    onConfirmPress(temperature);
    onClose();
  };

  return (
    <Modal
      isVisible={isVisible}
      style={styles.container}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}>
      <View style={StyleSheet.flatten([styles.modal, style])}>
        <Text style={styles.title}>Задайте температуру</Text>
        <Picker
          style={styles.wheelPicker}
          lineColor="#D9E4ED" //to set top and bottom line color (Without gradients)
          lineGradientColorFrom="#D9E4ED" //to set top and bottom starting gradient line color
          lineGradientColorTo="#D9E4ED" //to set top and bottom ending gradient
          selectedValue={temperature}
          itemStyle={{color: 'black', fontSize: 26}}
          onValueChange={setTemperature}>
          {wheelPickerData.map((value, i) => (
            <PickerItem label={`${value.toString()} ° C`} value={i} key={i} />
          ))}
        </Picker>
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
  wheelPicker: {
    width: 100,
    height: convertHeight(100),
    marginVertical: convertHeight(32),
  },
});

export default TemperatureModal;
