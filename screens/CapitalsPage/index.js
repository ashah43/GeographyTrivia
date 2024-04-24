import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';


export default function CapitalsPage() {
  const [response, setResponse] = useState('');
  const navigation = useNavigation();

  const handleSubmitPress = () => {
    navigation.navigate('CategoryPage');
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>CAPITALS</Text>
        <Text style={styles.question}>### QUESTION ###</Text>
        <TextInput
          style={styles.input}
          onChangeText={setResponse}
          value={response}
          placeholder="USER'S RESPONSE"
          placeholderTextColor="#000"
        />
         <View style={styles.inputUnderline} />
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmitPress}>
        <Text style={styles.submitButtonText}>SUBMIT</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
  };

