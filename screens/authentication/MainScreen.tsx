import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ConfirmButton from '../../src/components/buttons/ConfirmButton'

const MainScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ConfirmButton
        title='next'
        onPress={() => navigation.navigate('TasksManager')}
      />
    </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})