import React from 'react';
import { View, TouchableOpacity, Text, Pressable, Image } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function HomePage() {
    const navigation = useNavigation();

    const handlePlayPress = () => {
        navigation.navigate('CategoryPage');
      };

    const handleRulesPress = () => {
        navigation.navigate('RulesPage');    
    };
    const handleCAPress = () => {
        navigation.navigate('CorrectAnswerPage');    
    };
    const handleWAPress = () => {
        navigation.navigate('WrongAnswerPage');    
    };
    const handleResultsPress = () => {
        navigation.navigate('ResultsPage');    
    };
 
    return (
        <View style={styles.container}>
            <Image 
              source={require("/Users/oooople/GeographyTrivia-1/assets/globe.png")} // Update with the path to your globe image
              style={styles.globeImage}
            />
            <Text style={styles.title}>GEOGRAPHY TRIVIA</Text>
            
            <TouchableOpacity style={styles.playButton} onPress={handlePlayPress}>
                <Text style={styles.playButtonText}>PLAY</Text>
            </TouchableOpacity>
            <Text style={styles.subtitle}>PUT YOUR GEOGRAPHY SKILLS TO THE TEST</Text>
            <TouchableOpacity style={styles.rulesButton} onPress={handleRulesPress}>
                <Text style={styles.rulesButtonText}>RULES</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.testButton} onPress={handleCAPress}>
                <Text style={styles.testButtonText}>Correct Answer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.wrongButton} onPress={handleWAPress}>
                <Text style={styles.wrongButtonText}>Wrong Answer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.resultsButton} onPress={handleResultsPress}>
                <Text style={styles.resultsButtonText}>Results</Text>
            </TouchableOpacity>

            
        </View>
    );
}
