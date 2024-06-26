import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Main } from '../screens/Main'
import { PetList } from '../screens/PetList'
import { PetDetails } from '../screens/PetDetails';
import { Messages } from '../screens/Messages';
import { Settings } from '../screens/Settings';

const Stack = createNativeStackNavigator();

export function AppRoutes(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='main'>
        <Stack.Screen name="main" component={Main}/>
        <Stack.Screen name="PetList" component={PetList}/>
        <Stack.Screen name="PetDetails" component={PetDetails} />
        <Stack.Screen name="Messages" component={Messages} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

