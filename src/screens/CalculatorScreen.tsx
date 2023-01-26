import React from 'react';
import {Text, View} from 'react-native';
import {CircularButton} from '../components/CircularButton';
import {styles} from '../theme/appTheme';
import {useCalculator} from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
    additionBtn,
    buildNumber,
    clear,
    deleteNumber,
    divisionBtn,
    multiplicationBtn,
    number,
    operation,
    previousNumber,
    substractionBtn,
    switchSymbol,
  } = useCalculator();

  return (
    <View>
      {previousNumber !== '0' && (
        <Text style={styles.previousResult}>{previousNumber}</Text>
      )}
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>
      <View style={styles.buttonRow}>
        <CircularButton text="C" color="lightGray" action={clear} />
        <CircularButton text="+/-" color="lightGray" action={switchSymbol} />
        <CircularButton text="del" color="lightGray" action={deleteNumber} />
        <CircularButton text="/" color="orange" action={divisionBtn} />
      </View>
      <View style={styles.buttonRow}>
        <CircularButton text="7" action={buildNumber} />
        <CircularButton text="8" action={buildNumber} />
        <CircularButton text="9" action={buildNumber} />
        <CircularButton text="X" color="orange" action={multiplicationBtn} />
      </View>
      <View style={styles.buttonRow}>
        <CircularButton text="4" action={buildNumber} />
        <CircularButton text="5" action={buildNumber} />
        <CircularButton text="6" action={buildNumber} />
        <CircularButton text="-" color="orange" action={substractionBtn} />
      </View>
      <View style={styles.buttonRow}>
        <CircularButton text="1" action={buildNumber} />
        <CircularButton text="2" action={buildNumber} />
        <CircularButton text="3" action={buildNumber} />
        <CircularButton text="+" color="orange" action={additionBtn} />
      </View>
      <View style={styles.buttonRow}>
        <CircularButton text="0" large action={buildNumber} />
        <CircularButton text="." action={buildNumber} />
        <CircularButton text="=" color="orange" action={operation} />
      </View>
    </View>
  );
};
