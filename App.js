import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from './screens/HomePage';
import CategoryPage from './screens/CategoryPage';
import RulesPage from './screens/RulesPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as Font from 'expo-font';
import { LuckiestGuy_400Regular } from '@expo-google-fonts/luckiest-guy';
import AppLoading from 'expo-app-loading';
import CorrectAnswerPage from './screens/CorrectAnswerPage';
import WrongAnswerPage from './screens/WrongAnswerPage';
import ResultsPage from './screens/ResultsPage';
import CapitalsPage from './screens/CapitalsPage';
import CitiesPage from './screens/CitiesPage'; 
import CountriesPage from './screens/CountriesPage';
import LandmarksPage from './screens/LandmarksPage'; 
import StatesPage from './screens/StatesPage';
import { GameProvider } from '/Users/oooople/GeographyTrivia-1/context/GameContext.js'; // adjust the import path as needed


// Load the font asynchronously
Font.loadAsync({
  'LuckiestGuy': LuckiestGuy_400Regular,
});


const Stack = createNativeStackNavigator();

export default function App() {
 
  const [fontsLoaded] = useFonts({
    LuckiestGuy: LuckiestGuy_400Regular,
  });
  
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <GameProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false, headerTitleStyle: {color: "white"}, headerTintColor: 'white', headerStyle: {backgroundColor: "rgb(22, 23, 24)"}}}>
        <Stack.Screen name="HomePage" component={HomePage}/>
        <Stack.Screen name="CategoryPage" component={CategoryPage}/>
        <Stack.Screen name="RulesPage" component={RulesPage}/>
        <Stack.Screen name="CorrectAnswerPage" component={CorrectAnswerPage}/>
        <Stack.Screen name="WrongAnswerPage" component={WrongAnswerPage}/>
        <Stack.Screen name="ResultsPage" component={ResultsPage}/>
        <Stack.Screen name="CapitalsPage" component={CapitalsPage}/>
        <Stack.Screen name="CitiesPage" component={CitiesPage}/>
        <Stack.Screen name="CountriesPage" component={CountriesPage}/>
        <Stack.Screen name="LandmarksPage" component={LandmarksPage}/>
        <Stack.Screen name="StatesPage" component={StatesPage}/>
      </Stack.Navigator>
    </NavigationContainer>
    </GameProvider>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
