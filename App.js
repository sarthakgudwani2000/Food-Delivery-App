import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './src/screens/LoginSignUpScreens/WelcomeScreen';
import SignupScreen from './src/screens/LoginSignUpScreens/SignUpScreen';
import LoginScreen from './src/screens/LoginSignUpScreens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName='welcomepage'>
        <Stack.Screen name="welcomepage" component={WelcomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="signup" component={SignupScreen}
          options={{
            headerShown: false,

          }}
        />
        <Stack.Screen name="login" component={LoginScreen}
          options={{
            headerShown: false,

          }}
        />

        <Stack.Screen name="home" component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
