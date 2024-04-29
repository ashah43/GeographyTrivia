import React, { useState, useEffect, useCallback, useRef, useContext } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect} from '@react-navigation/native';
import { GameContext } from '/Users/oooople/GeographyTrivia-1/context/GameContext.js';


export default function CapitalsPage() {
  const [response, setResponse] = useState('');
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);  // State to store the correctness of the response
  const [correctCount, setCorrectCount] = useState(0);
  const navigation = useNavigation();
  const [timer, setTimer] = useState(30); 
  const intervalRef = useRef(null);
  const { incrementCorrectAnswers, incrementTotalQuestions, resetStreak, highestStreak } = useContext(GameContext);
  useEffect(() => {
    const loadedQuestions = require('/Users/oooople/GeographyTrivia-1/assets/capitals.json').questions;
    setQuestions(loadedQuestions);
    resetTimer();
  }, []);

  const resetTimer = () => {
    clearInterval(intervalRef.current); // Clear any existing interval
    setTimer(30); // Reset timer to initial value
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);
  };

  useEffect(() => {
    if (timer === 0) {
      Alert.alert('Time Up', 'Time is up! Moving to results.', [
        { text: 'OK', onPress: () => navigation.navigate('ResultsPage') }
      ]);
    }
  }, [timer, navigation]);

  useFocusEffect(
    useCallback(() => {
      if (questions.length) {
        resetTimer(); // Reset timer on question change
        const randomIndex = Math.floor(Math.random() * questions.length);
        setCurrentQuestion(questions[randomIndex]);
        setIsCorrect(null);  // Reset correctness state when new question is loaded
      }
    }, [questions])
  );

  const handleSubmitPress = () => {
    clearInterval(intervalRef.current); // Stop the timer when the user submits
    incrementTotalQuestions();

    if (currentQuestion && response.trim().toLowerCase() === currentQuestion.answer.toLowerCase()) {
      incrementCorrectAnswers(); // Increment correct answers only if correct
      navigation.navigate('CorrectAnswerPage');
  } else {
      resetStreak(); // Reset streak only if incorrect
      navigation.navigate('WrongAnswerPage');
  }


    if (currentQuestion && response.trim().toLowerCase() === currentQuestion.answer.toLowerCase()) {
      setIsCorrect(true);
      setCorrectCount(correctCount + 1);
      navigation.navigate('CorrectAnswerPage', { correctCount: correctCount + 1 });
    } else {
      setIsCorrect(false);
      navigation.navigate('WrongAnswerPage', { correctCount: 0 });
      setCorrectCount(0);
     

    }
  };

  // Clear the interval when the component is unmounted
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);



  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>Capitals</Text>
      </View>
      <View>
        <Text style={styles.question}>
          {currentQuestion ? currentQuestion.question : 'Loading...'}
        </Text>
        <Text style={styles.timerDisplay}>Time Remaining: {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}</Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={setResponse}
        value={response}
        placeholder="USER'S RESPONSE"
        placeholderTextColor="#000"
      />
      <View style={styles.inputUnderline} />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmitPress}>
        <Text style={styles.submitButtonText}>SUBMIT</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
