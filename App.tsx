import React, {useState} from 'react';
import {ImageBackground, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import LinearGradient from 'react-native-linear-gradient';

function App(): React.JSX.Element {
  const [userNumber, setUserNumber] = useState<any>();
  const [gameIsOver, setGameIsOver] = useState<boolean>(true);
  const [guessRounds, setGuessRounds] = useState<number>(0);

  function pickedNumberHandler(pickedNumber: number) {
    setUserNumber(pickedNumber);
    setGameIsOver(false); 
  }

  function gameOverHandler(numberOfRounds: number) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  function newGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        roundsNumber={guessRounds}
        userNumbers={userNumber}
        onStartNewGame={newGameHandler}
      />
    );
  }
  return (
    <>
    <StatusBar barStyle='default' />
    <LinearGradient
      colors={['#9dc61c', '#2d9c7f']}
      style={styles.rootContainer}>
      <ImageBackground
        source={require('./assets/images/background.webp')}
        resizeMode="cover"
        style={styles.rootContainer}
        imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootContainer}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
          </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // backgroundColor: '#9dc61c',
  },
  backgroundImage: {
    opacity: 0.15,
  },
});

export default App;
