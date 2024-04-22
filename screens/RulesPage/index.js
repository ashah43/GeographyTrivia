import React from 'react';
import { View, SafeAreaView, Text, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from './styles'; // make sure this path matches the location of your styles.js file

const App = () => {

const navigation = useNavigation();

const handleMainMenuPress = () => {
    navigation.navigate('HomePage');
};

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.content}>
        <View style={styles.rulesHeaderBox}>
          <Text style={styles.headerText}>RULES HOW TO PLAY</Text>
        </View>
        <View style={styles.rulesListBox}>
          <Text style={styles.rule}>- SELECT A CATEGORY YOU WOULD LIKE TO TRY</Text>
          <Text style={styles.rule}>- TRY TO GET AS MANY QUESTIONS CORRECT CONSECUTIVELY.</Text>
          <Text style={styles.rule}>- GAME OVER WHEN YOU GET A QUESTION WRONG.</Text>
          <Text style={styles.rule}>- HAVE FUN AND REFINE THOSE GEOGRAPHY SKILLS!</Text>
        </View>
      <TouchableOpacity style={styles.button} onPress={handleMainMenuPress}>
        <Text style={styles.buttonText}>main menu</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};

export default App;
