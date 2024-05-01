import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
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
              source={require("/Users/oooople/GeographyTrivia-1/assets/globe.png")} 
              style={styles.globeImage}
            />
            <Text style={styles.title}>GEOGRAPHY TRIVIA</Text>
            <TouchableOpacity style={styles.playButton} onPress={handlePlayPress}>
                <Text style={styles.playButtonText}>PLAY</Text>
            </TouchableOpacity>
            <Text style={styles.subtitle}>PUT YOUR GEOGiRAPHY SKILLS TO THE TEST</Text>
            <TouchableOpacity style={styles.rulesButton} onPress={handleRulesPress}>
                <Text style={styles.rulesButtonText}>RULES</Text>
            </TouchableOpacity>
        </View>
    );
}
