import React, { useContext } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { GameContext } from '/Users/oooople/GeographyTrivia-1/context/GameContext.js';

export default function CorrectAnswerPage() {
  const navigation = useNavigation();
  const { 
    correctAnswers, 
    incrementCorrectAnswers, 
    incrementTotalQuestions, 
    highestStreak, 
    currentStreak, 
    setCurrentStreak 
  } = useContext(GameContext);

 
  const handleNextPress = () => {
     
    
    navigation.goBack(); 
  };

  const handleResultPress = () => {
    navigation.navigate('ResultsPage', {
      correctCount: correctAnswers,
      totalQuestions: incrementTotalQuestions,
      highestStreak: highestStreak
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>That's Correct Keep On Going!</Text>
      <Image
        source={require("/Users/oooople/GeographyTrivia-1/assets/checkmark.png")}
        style={styles.globeImage}
      />
      <TouchableOpacity style={styles.playButton} onPress={handleNextPress}>
        <Text style={styles.playButtonText}>Next Question</Text>
      </TouchableOpacity>
      <Text style={styles.subtitle}>Streak: {currentStreak}</Text>
      <TouchableOpacity style={styles.rulesButton} onPress={handleResultPress}>
        <Text style={styles.rulesButtonText}>Results</Text>
      </TouchableOpacity>
    </View>
  );
}
