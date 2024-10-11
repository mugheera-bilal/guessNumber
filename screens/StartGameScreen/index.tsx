import {useState} from 'react';
import {TextInput, View, Alert, Text, Dimensions, KeyboardAvoidingView, ScrollView} from 'react-native';
import styles from './styles';
import PrimaryButton from '../../components/PrimaryButton';
import Card from '../../components/card';
import Title from '../../components/Title';
import InstructionText from '../../components/instructionText';

function StartGameScreen({onPickNumber}: any) {
  const [enteredNumber, setEnteredNumber] = useState<string>('');

  function inputHandler(enteredText: string) {
    setEnteredNumber(enteredText);
  }

  function resetInput() {
    setEnteredNumber('');
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid Number', 'number must be between 1 to 99', [
        {text: 'okay', style: 'destructive', onPress: resetInput},
      ]);
      return;
    }
    onPickNumber(chosenNumber);
  }

  return (
    <ScrollView>
    <KeyboardAvoidingView style = {{flex : 1}} behavior='position'>
    <View style={styles.rootContainer}>
      <Title>Guess Number</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          onChangeText={inputHandler}
          value={enteredNumber}
          autoCapitalize="none"
          autoCorrect={false}
          />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttoncontainer}>
            <PrimaryButton onPressButton={resetInput}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttoncontainer}>
            <PrimaryButton onPressButton={confirmInputHandler}>
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
          </KeyboardAvoidingView>
          </ScrollView>
  );
}

export default StartGameScreen;
