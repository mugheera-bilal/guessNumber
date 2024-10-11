import {Dimensions, StyleSheet} from 'react-native';
import {theme} from '../../components/PrimaryButton/theme';

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  guessContainer: {
    flex: 1,
    padding : deviceWidth > 380 ? 12 : 20,
    // alignItems : 'center'
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  buttonContainer: {
    flex: 1,
  },
  buttonsContainerWide : {
    flexDirection : 'row',
    alignItems : 'center'
  },

  instructionCascading : {
    marginBottom : 25
  },
  listContainer : { 
    flex :  1,
    padding : 12
  }
  
});

export default styles;
