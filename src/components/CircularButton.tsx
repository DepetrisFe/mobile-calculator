import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  text: string;
  color?: 'orange' | 'lightGray' | 'darkGray';
  large?: boolean;
  action: (textNumber: string) => void;
}

export const CircularButton = ({
  text,
  color = 'darkGray',
  large = false,
  action,
}: Props) => {
  const colors = {
    orange: '#FF9427',
    lightGray: '#9B9B9B',
    darkGray: '#2D2D2D',
  };
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View
        style={{
          ...styles.button,
          backgroundColor: colors[color],
          width: large ? 180 : 80,
        }}>
        <Text
          style={{
            ...styles.buttonText,
            color: color === 'lightGray' ? 'black' : 'white',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
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
