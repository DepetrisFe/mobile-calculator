import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  background: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
  previousResult: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 30,
    textAlign: 'right',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
  result: {
    color: 'white',
    fontSize: 60,
    marginBottom: 10,
    textAlign: 'right',
  },
});
