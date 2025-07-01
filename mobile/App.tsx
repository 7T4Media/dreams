
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { LanguageProvider } from './src/contexts/LanguageContext';
import HomeScreen from './src/screens/HomeScreen';
import AIEcosystemScreen from './src/screens/AIEcosystemScreen';
import DreaMTVScreen from './src/screens/DreaMTVScreen';
import MusicianVerseScreen from './src/screens/MusicianVerseScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'AI Ecosystem') {
            iconName = focused ? 'brain' : 'brain-outline';
          } else if (route.name === 'Dr33MTV') {
            iconName = focused ? 'play-circle' : 'play-circle-outline';
          } else if (route.name === 'MusicianVerse') {
            iconName = focused ? 'musical-notes' : 'musical-notes-outline';
          } else {
            iconName = 'ellipse-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#8B5CF6',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="AI Ecosystem" component={AIEcosystemScreen} />
      <Tab.Screen name="Dr33MTV" component={DreaMTVScreen} />
      <Tab.Screen name="MusicianVerse" component={MusicianVerseScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <LanguageProvider>
        <NavigationContainer>
          <StatusBar style="auto" />
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Main" component={TabNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </LanguageProvider>
    </SafeAreaProvider>
  );
}
