import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const CategorySelectScreen = ({ navigation }) => {
  const categories = ['Countries', 'States', 'Cities', 'Capitals', 'Landmarks'];
  
  // You could also directly navigate within this function, using the category name
  const handlePress = (category) => {
    let page = `${category}Page`;
    navigation.navigate(page);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>SELECT CATEGORY</Text>
      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.button, { backgroundColor: styles.colors[index % styles.colors.length] }]}
          onPress={() => handlePress(category)}
        >      
          <Text style={styles.buttonText}>{category.toUpperCase()}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.backbutton} onPress={() => navigation.navigate('HomePage')}>
        <Text style={styles.backbuttontext}>Main Menu</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CategorySelectScreen;
