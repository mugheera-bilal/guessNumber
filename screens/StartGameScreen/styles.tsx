import {StyleSheet} from 'react-native';
import {theme} from '../../components/PrimaryButton/theme';
import { deviceHeight, deviceWidth } from '../../constants/dimensions';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: deviceWidth > 380 ? 15 : 100,
    // marginTop : 100,
    alignItems: 'center',
  },
  numberInput: {
    // backgroundColor : 'white',
    borderColor: '#006047',
    borderBottomWidth: 2,
    // marginVertical: deviceWidth > 380 ? 5 : 10,
    marginVertical : 10,
    // borderRadius : 10,
    height: 50,
    width: 50,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  buttoncontainer: {
    flex: 1,
  },
});

export default styles;
