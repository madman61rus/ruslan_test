import React, {useState} from 'react';
import {View, ViewStyle, StyleSheet, Button} from 'react-native';
import CircularIndicator from '../components/CircularIndicator';
import {convertHeight} from '../utils/dimensions';
import {TimeType} from '../types/time';
import TemperatureModal from "../components/TemperatureModal";
import TimeModal from '../components/TimeModal';

interface TestScreenProps {
    style?: ViewStyle;
}

const TestScreen: React.FC<TestScreenProps> = ({style = {}}) => {
    const [temperature, setTemperature] = useState(23);
    const [time, setTime] = useState<TimeType>({
        hours: 0,
        minutes: 0,
    });
    const [tempModalVisible, setTempModalVisible] = useState(false);
    const [timeModalVisible, setTimeModalVisible] = useState(false);

    const handleChange = (value: number) => {
        setTemperature(Math.round(value));
    };

    const handleTimeChange = (value: TimeType) => {
        setTime(value);
    };


    return (
        <View style={StyleSheet.flatten([styles.container, style])}>
            <CircularIndicator onChange={handleChange} value={temperature} />
            <View style={styles.buttonsContainer}>
                <Button
                    title="Задать температуру"
                    onPress={() => setTempModalVisible(true)}
                />
                <Button
                    title="Задать время"
                    onPress={() => setTimeModalVisible(true)}
                />
                <TemperatureModal isVisible={tempModalVisible} onClose={() => setTempModalVisible(false)} />
                <TimeModal isVisible={timeModalVisible} onClose={() => setTempModalVisible(false)} />
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
});

export default TestScreen;
