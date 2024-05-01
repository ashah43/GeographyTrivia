// ResultsPage.js
import React, { useContext } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { GameContext } from '/Users/oooople/GeographyTrivia-1/context/GameContext.js';

export default function ResultsPage() {
    const navigation = useNavigation();
    const { resetGameStats, correctAnswers, totalQuestions, highestStreak, } = useContext(GameContext);

   
    const handleCategoryChangePress = () => {
        resetGameStats(); 
        navigation.navigate('CategoryPage');
    };

    const handleMainMenuPress = () => {
        resetGameStats();
        navigation.navigate('HomePage');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Excellent Work!</Text>
            <Text style={styles.subtitle}>Results:</Text>
            <Text style={styles.resultsText}>Questions Correct: {correctAnswers}</Text>
            <Text style={styles.resultsText}>Total Questions: {totalQuestions}</Text>
            <Text style={styles.resultsText}>Highest Streak: {highestStreak}</Text>

            <TouchableOpacity style={styles.playButton} onPress={handleCategoryChangePress}>
                <Text style={styles.playButtonText}>Change Category</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.rulesButton} onPress={handleMainMenuPress}>
                <Text style={styles.rulesButtonText}>Main Menu</Text>
            </TouchableOpacity>
        </View>
    );
}
