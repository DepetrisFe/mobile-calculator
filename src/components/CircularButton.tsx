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
    borderRadius: 40,
    height: 80,
    justifyContent: 'center',
    marginHorizontal: 10,
    width: 80,
  },
  buttonText: {
    color: 'black',
    fontSize: 30,
    fontWeight: '300',
    textAlign: 'center',
  },
});
