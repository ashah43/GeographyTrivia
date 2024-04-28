import React, { useState, useEffect, useCallback } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';

export default function CapitalsPage() {
  const [response, setResponse] = useState('');
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);  // State to store the correctness of the response
  const [correctCount, setCorrectCount] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    const loadedQuestions = require('/Users/leo/Desktop/Academics/Spring24/EC327/Project/GeographyTrivia/assets/capitals.json').questions;
    setQuestions(loadedQuestions);
  }, []);

  useFocusEffect(
    useCallback(() => {
      if (questions.length) {
        const randomIndex = Math.floor(Math.random() * questions.length);
        setCurrentQuestion(questions[randomIndex]);
        setIsCorrect(null);  // Reset correctness state when new question is loaded
      }
    }, [questions])
  );

  const handleSubmitPress = () => {
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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>Capitals</Text>
      </View>
      <View>
        <Text style={styles.question}>
          {currentQuestion ? currentQuestion.question : 'Loading...'}
        </Text>
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
