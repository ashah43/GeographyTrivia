import React from 'react';
import { View, TouchableOpacity, Text, Pressable, Image } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function WrongAnswerPage() {
    const navigation = useNavigation();

    const handleResultPress = () => {
        navigation.navigate('ResultsPage');
      };

    const handleNextPress = () => {
        navigation.goBack();    
    };
 
    return (
        <View style={styles.container}>
            <Text style={styles.title}>SORRY THATS INCORRECT</Text>
            <Text style={styles.subtitle}>You're sharpening your skills with every play!</Text>
            <Image 
              source={require("/Users/leo/Desktop/Academics/Spring24/EC327/Project/GeographyTrivia/assets/wrong.png")} // Update with the path to your globe image
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
