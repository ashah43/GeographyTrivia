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
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false, headerTitleStyle: {color: "white"}, headerTintColor: 'white', headerStyle: {backgroundColor: "rgb(22, 23, 24)"}}}>
        <Stack.Screen name="HomePage" component={HomePage}/>
        <Stack.Screen name="CategoryPage" component={CategoryPage}/>
        <Stack.Screen name="RulesPage" component={RulesPage}/>
      </Stack.Navigator>
    </NavigationContainer>
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
