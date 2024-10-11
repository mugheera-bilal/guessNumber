import {Text, View} from 'react-native';
import styles from './styles';

function GuessLogItems({roundNumber, guess}: any) {
  return (
    <View style={styles.listItem}>
      <Text style = {styles.textStyle}># {roundNumber}</Text>
      <Text style = {styles.textStyle}>Opponent's Guess: {guess}</Text>
    </View>
  );
}

export default GuessLogItems;
