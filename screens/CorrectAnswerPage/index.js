import React from 'react';
import { View, TouchableOpacity, Text, Pressable, Image } from 'react-native';
import styles from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function CorrectAnswerPage() {
    const navigation = useNavigation();
    const route = useRoute();
    const correctCount = route.params?.correctCount; // Using optional chaining in case params is undefined


    const handleNextPress = () => {
        navigation.goBack();
      };

    const handleResultPress = () => {
        navigation.navigate('ResultsPage');    
    };
 
    return (
        <View style={styles.container}>
            <Text style={styles.title}>That's Correct Keep On Going!</Text>
            <Image 
              source={require("/Users/leo/Desktop/Academics/Spring24/EC327/Project/GeographyTrivia/assets/checkmark.png")} // Update with the path to your globe image
              style={styles.globeImage}
            />
            
            
            
            <TouchableOpacity style={styles.playButton} onPress={handleNextPress}>
                <Text style={styles.playButtonText}>Next Question</Text>
            </TouchableOpacity>
            <Text style={styles.subtitle}>Streak: {correctCount}</Text>
            <TouchableOpacity style={styles.rulesButton} onPress={handleResultPress}>
                <Text style={styles.rulesButtonText}>Results</Text>
            </TouchableOpacity>

            
        </View>
    );
}
