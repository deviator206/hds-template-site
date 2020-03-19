import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import appRoutes from './components/routes';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      {appRoutes.map((route, i) => (
              <Stack.Screen key={`scr_${i}`} name={route.name} component={route.component} />
            ))}
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}