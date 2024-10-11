import {Text, View} from 'react-native';
import styles from './styles';

function InstructionText({children, style}: any) {
  return (
    <View>
      <Text style = {[styles.instructionContainer , style]}>{children}</Text>
    </View>
  );
}

export default InstructionText;
