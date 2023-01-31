import {useState, useRef} from 'react';

enum Operations {
  addition,
  division,
  multiplication,
  substraction,
}

export const useCalculator = () => {
  const [number, setNumber] = useState('0');
  const [previousNumber, setPreviousNumber] = useState('0');
  const lastOperation = useRef<Operations>();

  const clear = () => {
    setNumber('0');
    setPreviousNumber('0');
  };

  const buildNumber = (textNumber: string) => {
    if (number.includes('.') && textNumber === '.') {
      return;
    }
    if (number.startsWith('0') || number.startsWith('-0')) {
      if (textNumber === '.') {
        setNumber(number + textNumber);
      } else if (textNumber === '0' && number.includes('.')) {
        setNumber(number + textNumber);
      } else if (textNumber !== '0' && !number.includes('.')) {
        setNumber(textNumber);
      } else if (textNumber !== '0' && number.includes('.')) {
        setNumber(number + textNumber);
      } else if (textNumber === '0' && !number.includes('.')) {
        setNumber(number);
      }
    } else {
      setNumber(number + textNumber);
    }
  };

  const deleteNumber = () => {
    if (number.includes('-') && number.length === 2) {
      setNumber('0');
    } else if (number.length > 1) {
      setNumber(number.slice(0, -1));
    } else {
      setNumber('0');
    }
  };

  const switchSymbol = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const changePreviousNumber = () => {
    if (number.endsWith('.')) {
      setPreviousNumber(number.slice(0, -1));
    } else {
      setPreviousNumber(number);
    }
    setNumber('0');
  };

  const divisionBtn = () => {
    changePreviousNumber();
    lastOperation.current = Operations.division;
  };

  const multiplicationBtn = () => {
    changePreviousNumber();
    lastOperation.current = Operations.multiplication;
  };

  const substractionBtn = () => {
    changePreviousNumber();
    lastOperation.current = Operations.substraction;
  };

  const additionBtn = () => {
    changePreviousNumber();
    lastOperation.current = Operations.addition;
  };

  const operation = () => {
    const num1 = Number(number);
    const num2 = Number(previousNumber);

    switch (lastOperation.current) {
      case Operations.addition:
        setNumber(`${num1 + num2}`);
        break;
      case Operations.substraction:
        setNumber(`${num2 - num1}`);
        break;
      case Operations.multiplication:
        setNumber(`${num1 * num2}`);
        break;
      case Operations.division:
        setNumber(`${num2 / num1}`);
        break;
    }
  };

  return {
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
  };
};
