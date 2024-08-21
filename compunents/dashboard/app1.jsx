import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from './dashboard';
import Calendar from './calendar';
import Home from './home'

const Tab = createBottomTabNavigator();

export default function App1({navigation}) {
  return (
    <Tab.Navigator initialRouteName='Dashboard'>
      <Tab.Screen name="Dashboard"  component={Dashboard} options={{headerShown:false}}/>
      <Tab.Screen name="Calendar" component={Calendar} options={{headerShown:false}}/>
      <Tab.Screen name="Home" component={Home} options={{headerShown:false}}/>
    </Tab.Navigator>
  );
}