import { StyleSheet, Text, View } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react'
import TasksManager from './screens/authentication/TasksManager';
import MainScreen from './screens/authentication/MainScreen';
import AddTaskScreen from './screens/authentication/AddTaskScreen';
import CameraScreen from './screens/authentication/CameraScreen';
import { Reducer, Dispatch } from 'react';
import { useSelector,useDispatch, Provider } from 'react-redux';



const Stack = createNativeStackNavigator()

const App = () => {
  return (
    // <Provider>
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
              options={{title: 'What to do today?'}}
            />
            <Stack.Screen
                name='CameraScreen'
                component={CameraScreen}
            />
        </Stack.Navigator>
    </NavigationContainer>
    // </Provider>
  )
}

export default App


