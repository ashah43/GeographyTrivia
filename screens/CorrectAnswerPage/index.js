import React from 'react';
import { View, TouchableOpacity, Text, Pressable, Image } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function CorrectAnswerPage() {
    const navigation = useNavigation();

    const handlePlayPress = () => {
        navigation.navigate('CategoryPage');
      };

    const handleRulesPress = () => {
        navigation.navigate('HomePage');    
    };
 
    return (
        <View style={styles.container}>
            <Text style={styles.title}>That's Correct Keep On Going!</Text>
            <Image 
              source={require("/Users/leo/Desktop/Academics/Spring24/EC327/Project/GeographyTrivia/assets/checkmark.png")} // Update with the path to your globe image
              style={styles.globeImage}
            />
            
            
            
            <TouchableOpacity style={styles.playButton} onPress={handlePlayPress}>
                <Text style={styles.playButtonText}>Next Question</Text>
            </TouchableOpacity>
            <Text style={styles.subtitle}>Streak: #</Text>
            <TouchableOpacity style={styles.rulesButton} onPress={handleRulesPress}>
                <Text style={styles.rulesButtonText}>Main Menu</Text>
            </TouchableOpacity>

            
        </View>
    );
}
