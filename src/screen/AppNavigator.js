import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import HomeScreen from './HomeScreen';

const stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
   <NavigationContainer initialRouteName = "SplashScreen">
    <stack.Navigator>
       <stack.Screen name='Login' component={LoginScreen} options={{headerShown: false}} />
       <stack.Screen name='Signup' component={SignupScreen} options={{headerShown: false}} />
       <stack.Screen name='Home' component={HomeScreen} options={{headerShown: false}} />
    </stack.Navigator>
   </NavigationContainer>
  )
}

export default AppNavigator