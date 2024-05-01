import React, {useContext} from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { GameContext } from '/Users/oooople/GeographyTrivia-1/context/GameContext.js';

export default function WrongAnswerPage() {
  const navigation = useNavigation();
  const { incrementTotalQuestions, resetStreak } = useContext(GameContext);

  const handleResultPress = () => {
    navigation.navigate('ResultsPage');
  };

  const handleNextPress = () => {
    resetStreak(); 
    navigation.goBack(); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SORRY THAT'S INCORRECT</Text>
      <Text style={styles.subtitle}>You're sharpening your skills with every play!</Text>
      <Image 
        source={require("/Users/oooople/GeographyTrivia-1/assets/wrong.png")}
        style={styles.globeImage}
      />
      <TouchableOpacity style={styles.playButton} onPress={handleNextPress}>
        <Text style={styles.playButtonText}>Next Question</Text>
      </TouchableOpacity>
      <Text style={styles.subtitle}>Streak Lost</Text>
      <TouchableOpacity style={styles.rulesButton} onPress={handleResultPress}>
        <Text style={styles.rulesButtonText}>See Results</Text>
      </TouchableOpacity>
    </View>
  );
}
