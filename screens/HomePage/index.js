import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function HomePage() {
    const navigation = useNavigation();

    const handlePlayPress = (screenName) => {
        navigation.navigate(screenName);
      };

    const handleRulesPress = () => {
        // Navigation logic goes here
    };

    return (
        <View style={styles.container}>
            <Image 
              source={require('/Users/oooople/GeographyTrivia-1/assets/globe.png')} // Update with the path to your globe image
              style={styles.globeImage}
            />
            <Text style={styles.title}>GEOGRAPHY TRIVIA</Text>
            <Pressable style={styles.playButton} onPress={handlePlayPress}>
                <Text style={styles.playButtonText}>PLAY</Text>
            </Pressable>
            <Text style={styles.subtitle}>PUT YOUR GEOGRAPHY SKILLS TO THE TEST</Text>
            <Pressable style={styles.rulesButton} onPress={handleRulesPress}>
                <Text style={styles.rulesButtonText}>RULES</Text>
            </Pressable>
        </View>
    );
}
