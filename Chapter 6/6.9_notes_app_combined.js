// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NoteListScreen from './screens/NoteListScreen';
import NoteDetailScreen from './screens/NoteDetailScreen';
import NoteCreateScreen from './screens/NoteCreateScreen';
import SettingsScreen from './screens/SettingsScreen';
import ProfileScreen from './screens/ProfileScreen';
import HelpScreen from './screens/HelpScreen';

const Stack = createNativeStackNavigator();
function NotesStack() {
  return (
    <Stack.Navigator initialRouteName="List">
      <Stack.Screen name="List" component={NoteListScreen} options={{ title: 'All Notes' }} />
      <Stack.Screen name="Detail" component={NoteDetailScreen} options={{ title: 'Note Details' }} />
      <Stack.Screen name="Create" component={NoteCreateScreen} options={{ title: 'New Note' }} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Notes" component={NotesStack} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={MainTabs} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Help" component={HelpScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
