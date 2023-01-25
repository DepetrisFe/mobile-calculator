import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  text: string;
  color?: 'orange' | 'lightGray' | 'darkGray';
}

export const CircularButton = ({text, color = 'darkGray'}: Props) => {
  const colors = {
    orange: '#FF9427',
    lightGray: '#9B9B9B',
    darkGray: '#2D2D2D',
  };
  return (
    <View style={{...styles.button, backgroundColor: colors[color]}}>
      <Text style={styles.buttonText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 80,
    width: 80,
    borderRadius: 40,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    color: 'black',
    fontWeight: '300',
  },
});
