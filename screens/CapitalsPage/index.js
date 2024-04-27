import React, { useState, useEffect, useCallback } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';


export default function CapitalsPage() {
  const [response, setResponse] = useState('');
  const navigation = useNavigation();

  const handleSubmitPress = () => {
    navigation.navigate('CategoryPage');
  };
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  useEffect(() => {
    // Load the questions from the local JSON file
    const loadedQuestions = require('/Users/oooople/GeographyTrivia-1/assets/capitals.json').questions;
    setQuestions(loadedQuestions);
    
  }, []);

  useFocusEffect(
    useCallback(() => {
      // Function to pick a random question from loaded questions
      if (questions.length) {
        const randomIndex = Math.floor(Math.random() * questions.length);
        setCurrentQuestion(questions[randomIndex]);
      }
    }, [questions])
  );

  const pickRandomQuestion = (questionsArray) => {
    const randomIndex = Math.floor(Math.random() * questionsArray.length);
    setCurrentQuestion(questionsArray[randomIndex]);
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

