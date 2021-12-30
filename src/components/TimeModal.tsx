import React, {useState} from 'react';
import {View, ViewStyle, StyleSheet, Text} from 'react-native';
import {convertHeight, convertWidth} from '../utils/dimensions';
import Modal from 'react-native-modal';

interface TimeModalProps {
    style?: ViewStyle;
    isVisible: boolean;
    onClose: () => void;
}

const TimeModal: React.FC<TimeModalProps> = ({
    style = {},
    isVisible,
    onClose,
                                                           }) => {

    const [temperature, setTemperature] = useState(0);

    const wheelPickerData = ['0', '1', '2'];

    return (
        <Modal isVisible={isVisible} style={styles.container} onBackButtonPress={onClose} onBackdropPress={onClose}>
            <View style={StyleSheet.flatten([styles.modal, style])}>
                <Text style={styles.title}>Задайте время</Text>

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

    }
});

export default TimeModal;
