import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Logoscrn from './compunents/Logoscrn';
import Splashscrn from './compunents/Splashscrn';
import Loginscreen from './compunents/Loginscreen';
import Otpscreen from './compunents/Otpscreen';
import Setpin from './compunents/Setpin';
import CarouselTask from './compunents/carousel_task';
import Dashboard from './compunents/dashboard/dashboard';

const Stack = createNativeStackNavigator();

export default  App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Dashboard'>
        <Stack.Screen
          name="Onboarding"
          component={Splashscrn}
          options={{headerShown:false}}
        />
        <Stack.Screen name="Logo" component={Logoscrn}
           options={{headerShown:false}} />
        <Stack.Screen name="CarouselTask" component={CarouselTask}
           options={{headerShown:false}} />
           <Stack.Screen name="Loginscreen" component={Loginscreen}
           options={{headerShown:false}} />
            <Stack.Screen name="Otpscreen" component={Otpscreen}
           options={{headerShown:false}} />
            <Stack.Screen name="Setpin" component={Setpin}
           options={{headerShown:false}} />
           <Stack.Screen name="Dashboard" component={Dashboard}
           options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};