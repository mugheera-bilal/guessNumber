import {Image, Text, useWindowDimensions, View} from 'react-native';
import styles from './styles';
import Title from '../../components/Title';
import PrimaryButton from '../../components/PrimaryButton';

function GameOverScreen({roundsNumber, userNumbers, onStartNewGame}: any) {
  const {width, height} = useWindowDimensions();

  let content = (
    <>
      <Title>Game Is Over</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageStyle}
          source={require('../../assets/images/emoji.png')}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{' '}
        rounds to guess the number{' '}
        <Text style={styles.highlight}>{userNumbers}</Text>
      </Text>
      <PrimaryButton onPressButton={onStartNewGame}>
        Start New Game
      </PrimaryButton>
    </>
  );

  if (width > 500) {
    content = (
      <>
        <View style={styles.landscapeStyling}>
          <View>
            <Text style={styles.summaryText}>
              Your phone needed{' '}
              <Text style={styles.highlight}>{roundsNumber}</Text> rounds to
              guess the number{' '}
              <Text style={styles.highlight}>{userNumbers}</Text>
            </Text>
            <Title>Game Is Over</Title>
            <PrimaryButton onPressButton={onStartNewGame}>
              Start New Game
            </PrimaryButton>
          </View>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageStyle}
              source={require('../../assets/images/emoji.png')}
            />
          </View>
        </View>
      </>
    );
  }
  return <View style={styles.rootContainer}>{content}</View>;
}

export default GameOverScreen;
