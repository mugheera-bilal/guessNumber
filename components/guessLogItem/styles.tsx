import {StyleSheet} from 'react-native';
import {theme} from '../PrimaryButton/theme';

const styles = StyleSheet.create({
  listItem: {
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: theme.titleColor,
    flexDirection: 'row',
    marginVertical: 8,
    padding: 8,
    justifyContent: 'space-evenly',
    elevation: 8,
    // marginTop: 10,
    width : '100%'
  }, 
  textStyle : {
    // fontFamily : 'open-sans-bold',
    color :  'white',
    fontSize : 20
  }
});

export default styles;
