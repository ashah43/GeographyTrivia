import React from 'react';
import { View, TouchableOpacity, Text, Pressable, Image } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function WrongAnswerPage() {
    const navigation = useNavigation();

    const handlePlayPress = () => {
        navigation.navigate('ResultsPage');
      };

    const handleRulesPress = () => {
        navigation.navigate('HomePage');    
    };
 
    return (
        <View style={styles.container}>
            <Text style={styles.title}>SORRY THATS INCORRECT</Text>
            <Text style={styles.subtitle}>You're sharpening your skills with every play!</Text>
            <Image 
              source={require("/Users/oooople/GeographyTrivia-1/assets/wrong.png")} // Update with the path to your globe image
              style={styles.globeImage}
            />
            
            
            
            <TouchableOpacity style={styles.playButton} onPress={handlePlayPress}>
                <Text style={styles.playButtonText}>See Results</Text>
            </TouchableOpacity>
            <Text style={styles.subtitle}>Streak Lost</Text>
            <TouchableOpacity style={styles.rulesButton} onPress={handleRulesPress}>
                <Text style={styles.rulesButtonText}>Main Menu</Text>
            </TouchableOpacity>

            
        </View>
    );
}
