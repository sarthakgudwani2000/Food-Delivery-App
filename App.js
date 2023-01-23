import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './src/screens/LoginSignUpScreens/WelcomeScreen';
import LoginScreen from './src/screens/LoginSignUpScreens/LoginScreen';
import SignUpScreen from './src/screens/LoginSignUpScreens/SignUpScreen';
import RootNavigation from './src/RootNavigation';


export default function App() {
  return (
    <RootNavigation />
    //  <WelcomeScreen />
      // <LoginScreen />
      // <SignUpScreen />
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
