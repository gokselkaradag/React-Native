import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import CoursesScreen from './src/screens/CoursesScreen';
import CoursesInformationScreen from './src/screens/CoursesInformationScreen';
import CounterScreen from './src/screens/CounterScreen';
import BoxScreen from './src/screens/BoxScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Ana Sayfa">
        <Stack.Screen name="Ana Sayfa" component={HomeScreen} />
        <Stack.Screen name="Kurslarım" component={CoursesScreen} />
        <Stack.Screen name="Kurs Bilgilerim" component={CoursesInformationScreen} />
        <Stack.Screen name="Sayaç Uygulaması" component={CounterScreen} />
        <Stack.Screen name="Kutu Uygulaması" component={BoxScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});