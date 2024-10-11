import {StyleSheet} from 'react-native';
import {theme} from '../PrimaryButton/theme';

const styles = StyleSheet.create({
  numberContainer: {
    borderWidth: 4,
    // alignItems : 'center'
    padding: 10,
    // flex : 1
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderColor: theme.titleColor,
  },
  numberText: {
    fontSize: 30,
    //  alignItems : 'center',
    //  justifyContent : 'center'
    color: theme.titleColor,
    fontWeight: 'bold',
  },
});

export default styles;
