import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IntroScreen from './src/screens/Onboarding/IntroScreen';
import LoginScreen from './src/screens/Onboarding/LoginScreen';
import CreateScreen from './src/screens/Onboarding/createscreen';
import HomeScreen from './src/screens/Home/homescreens';
import SearchResults from './src/screens/Home/SearchResults';
import ChurchDetails from './src/components/ChurchDetails';
const Stack = createStackNavigator();



export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="IntroScreen">

                <Stack.Screen
                    name="IntroScreen"
                    component={IntroScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="CreateScreen"
                    component={CreateScreen}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="SearchResults"
                    component={SearchResults}
                    options={{ headerShown: false }}
                />

                <Stack.Screen name="ChurchDetails" 
                component={ChurchDetails} 
                options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
