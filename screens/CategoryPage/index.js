import React, { useState, useRef, useEffect } from "react";
import { View, Text, TouchableOpacity} from "react-native";
import styles from "./styles";


const CategorySelectScreen = ({ navigation }) => {
    const categories = ['Countries', 'States', 'Cities', 'Capitals', 'Landmarks'];
    
    const handleBackPress = () => {
      navigation.navigate('HomePage');
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>SELECT CATEGORY</Text>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.button, { backgroundColor: styles.colors[index % styles.colors.length] }]}
            onPress={() => console.log(`${category} pressed`)} // Replace with navigation code if necessary
          >
            <Text style={styles.buttonText}>{category.toUpperCase()}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.backbutton} onPress={handleBackPress}>
          <Text style={styles.backbuttontext}>Main Menu</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default CategorySelectScreen;