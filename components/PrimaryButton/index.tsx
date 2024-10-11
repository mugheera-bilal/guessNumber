import {Pressable, Text, View} from 'react-native';
import styles from './styles';

function PrimaryButton({children, onPressButton}: any) {
  function pressHandler() {
    onPressButton()
  }
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({pressed}) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPressButton}
        android_ripple={{color: '#146d56'}}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;
