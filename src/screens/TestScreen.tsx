import React, {useState} from 'react';
import {View, ViewStyle, StyleSheet} from 'react-native';
import CircularIndicator from '../components/CircularIndicator';
import {convertHeight} from '../utils/dimensions';

interface TestScreenProps {
    style?: ViewStyle;
}

const TestScreen: React.FC<TestScreenProps> = ({style = {}}) => {
    const [temperature, setTemperature] = useState(0);

    const handleChange = (value: number) => {
        setTemperature(Math.round(value));
    };


    return (
        <View style={StyleSheet.flatten([styles.container, style])}>
            <CircularIndicator onChange={handleChange} value={temperature} />
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
});

export default TestScreen;
