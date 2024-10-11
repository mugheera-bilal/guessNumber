import {Text, View} from 'react-native';
import styles from './styles';

function NumberContainer({children}: any) {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;
