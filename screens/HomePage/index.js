import React, { useState, useRef, useEffect } from "react";
import { View, Text, Dimensions, Pressable, TextInput, KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./styles";

export default function HomePage() {
    const navigation = useNavigation()
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;


    return (
        <View style={styles.container}>
        <Text style={{ fontSize: 25, padding: 20, color: "white", paddingTop: 50, textAlign: 'center', marginBottom: -25 }}>Geography Trivia!</Text>
        <Text style={{ fontSize: 15, padding: 20, color: "white", textAlign:'center' }}>Play Geography Trivia Today!</Text>
        </View>

    )
}