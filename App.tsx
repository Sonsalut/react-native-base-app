import { StyleSheet, Text, View } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react'
import TasksManager from './screens/authentication/TasksManager';
import ConfirmButton from './src/components/buttons/ConfirmButton';
import MainScreen from './screens/authentication/MainScreen';
import AddTaskScreen from './screens/authentication/AddTaskScreen';


const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name='MainScreen'
                component={MainScreen}
                options={{title: 'Welcome'}}
            />
            <Stack.Screen
                name='TasksManager'
                component={TasksManager}
            />
            <Stack.Screen
              name='AddTask'
              component={AddTaskScreen}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App


