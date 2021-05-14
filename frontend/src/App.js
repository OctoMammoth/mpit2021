import React from 'react'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const linking = {
    prefixes: [
        /* your linking prefixes */
    ],
    config: {
        screens: {
            Home: '',
            Profile: 'user',
            Chat: 'chat',
            Dashboard: 'dashboard'
        }
    }
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App
