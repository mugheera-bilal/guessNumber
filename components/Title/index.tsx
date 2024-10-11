import {Text, View} from 'react-native';
import styles from './styles';

function Title({children}: any) {
  return (
    <View>
      <Text style = {styles.title}>{children}</Text>
    </View>
  );
}

export default Title;
