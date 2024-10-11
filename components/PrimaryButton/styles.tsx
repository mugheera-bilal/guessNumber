import {StyleSheet} from 'react-native';
import {theme} from './theme';

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 20,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: theme.color1,
    // borderRadius: 20,
    // margin: 4,
    elevation: 4,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
  pressed: {
    opacity: 0.75,
  },
});

export default styles;
