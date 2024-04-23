import React from 'react';
import { View, TouchableOpacity, Text, Pressable, Image } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function ResultsPage() {
    const navigation = useNavigation();

    const handlePlayPress = () => {
        navigation.navigate('CategoryPage');
      };

    const handleRulesPress = () => {
        navigation.navigate('HomePage');    
    };
 
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Excellent Work!</Text>
            <Text style={styles.subtitle}>Results:</Text>
            <Text style={styles.resultsText}>Questions Answered: #</Text>
            <Text style={styles.resultsText}>Time: #</Text>
            
            
            <TouchableOpacity style={styles.playButton} onPress={handlePlayPress}>
                <Text style={styles.playButtonText}>Change Category</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.rulesButton} onPress={handleRulesPress}>
                <Text style={styles.rulesButtonText}>Main Menu</Text>
            </TouchableOpacity>

            
        </View>
    );
}
