import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './src/screens/Home';
import CreateNote from './src/screens/CreateNote';
import Settings from './src/screens/Settings';
import NoteView from "./src/screens/NoteView"

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
      <Stack.Screen
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="CreateNote"
        component={CreateNote}
      />
      <Stack.Screen
        name="NoteView"
        component={NoteView}
      />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator screenOptions={{drawerType:"slide"}}  drawerContent={props => <Settings {...props}/> } >
      <Drawer.Screen
        name='HomeScreen'
        component={HomeStack}
        options={{
          drawerLabel: () => null,
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}
