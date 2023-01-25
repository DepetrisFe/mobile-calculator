import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {CircularButton} from '../components/CircularButton';

export const CalculatorScreen = () => {
  return (
    <View>
      <Text style={styles.previousResult}>1,500.00</Text>
      <Text style={styles.result}>1,500.00</Text>
      <View style={styles.buttonRow}>
        <CircularButton text="C" color="lightGray" />
        <CircularButton text="+/-" color="lightGray" />
        <CircularButton text="del" color="lightGray" />
        <CircularButton text="/" color="orange" />
      </View>
    </View>
  );
};
