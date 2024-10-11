import {StyleSheet} from 'react-native';
import { theme } from '../../components/PrimaryButton/theme';
import { Fonts } from '../../components/PrimaryButton/Fonts';

const styles = StyleSheet.create({
   rootContainer : {
      flex :  1,
      padding : 24,
      justifyContent : 'center',
      alignItems : 'center'

   },
   imageContainer : {
    width : 300,
    height : 300,
    borderRadius : 150,
    borderWidth : 3,
    overflow : 'hidden',
    margin : 60,
    alignItems : 'center',
    justifyContent : 'center',
   //  flex : 1

   },
   imageStyle : {
    width : '140%',
    height : '140%'
   },
   summaryText : {
      fontFamily : Fonts.font1,
      fontSize : 24,
      textAlign : 'center',
      marginBottom : 24
   } ,
   highlight : {
      fontWeight : 'bold',
      color : theme.titleColor
   } ,
   landscapeStyling : {
      flexDirection : 'row',
      alignItems : 'center'
   }
});

export default styles;
