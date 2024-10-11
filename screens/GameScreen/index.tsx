import {
  Alert,
  Dimensions,
  FlatList,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import styles from './styles';
import Title from '../../components/Title';
import {useEffect, useState} from 'react';
import NumberContainer from '../../components/game';
import PrimaryButton from '../../components/PrimaryButton';
import Card from '../../components/card';
import InstructionText from '../../components/instructionText';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GuessLogItems from '../../components/guessLogItem';

function randomNumberGenerator(min: number, max: number, exclude: number) {
  let rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return randomNumberGenerator(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber, onGameOver}: any) {
  let initialGuess = randomNumberGenerator(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);
  const [guessRounds, setGuessRounds] = useState<any[]>([]);

  const {width, height} = useWindowDimensions();

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function guessHandler(direction: string) {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert('SACH BOL !!', 'jhootey', [
        {text: 'sorry!', style: 'cancel'},
      ]);
      return;
    }
    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    console.log(minBoundary, maxBoundary);
    const newRandomNumber = randomNumberGenerator(
      minBoundary,
      maxBoundary,
      currentGuess,
    );
    setCurrentGuess(newRandomNumber);
    setGuessRounds((prevRounds: any[]) => [newRandomNumber, ...prevRounds]);
  }

  const guessRoundListLength = guessRounds.length;

  let content = (
    <>
      <Card>
      <NumberContainer>{currentGuess}</NumberContainer>

        <InstructionText style={styles.instructionCascading}>
          Higher or Lower !!!
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPressButton={guessHandler.bind(null, 'lower')}>
              <Ionicons name="remove-circle-outline" size={30} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPressButton={guessHandler.bind(null, 'greater')}>
              <Ionicons name="add-circle-outline" size={30} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );

  if (width > 500) {
content = 
<>
<InstructionText style={styles.instructionCascading}>
          Higher or Lower !!!
        </InstructionText>
        <View style={styles.buttonsContainerWide}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPressButton={guessHandler.bind(null, 'lower')}>
              <Ionicons name="remove-circle-outline" size={30} color="white" />
            </PrimaryButton>
          </View>
 <NumberContainer>{currentGuess}</NumberContainer>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPressButton={guessHandler.bind(null, 'greater')}>
              <Ionicons name="add-circle-outline" size={30} color="white" />
            </PrimaryButton>
          </View>
        </View>

</>
  }

  return (
    <View style={styles.guessContainer}>
      <Title>Opponents Guess !!!</Title>
      {content}
      <View style={styles.listContainer}>
        {/* {guessRounds.map(guessRounds => <Text key = {guessRounds}>{guessRounds}</Text>)} */}
        <FlatList
          data={guessRounds}
          renderItem={itemData => (
            <GuessLogItems
              roundNumber={guessRoundListLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={item => item}
        />
      </View>
    </View>
  );
}

export default GameScreen;
