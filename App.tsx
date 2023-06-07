import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import AddButton from './src/components/buttons/AddButton'
import ConfirmButton from './src/components/buttons/ConfirmButton'
import {NavigationContainer} from '@react-navigation/native'

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        {/* <AddButton/> */}
        <Text>To-do List</Text>
        <ConfirmButton
          title='Continue'
          // onPress={() => navigation.navigate()}
        />
      </View>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    borderWidth:1
  },
})