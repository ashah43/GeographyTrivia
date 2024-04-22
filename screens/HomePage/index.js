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

    return (
        <View style={styles.container}>
            <Image 
              source={require("/Users/leo/Desktop/Academics/Spring24/EC327/Project/GeographyTrivia/assets/globe.png")} // Update with the path to your globe image
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
        </View>
    );
}
