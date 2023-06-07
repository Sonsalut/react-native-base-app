import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AddButton from '../../src/components/buttons/AddButton'

const TasksManager = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonView}>
        <AddButton
          onPress={() => navigation.navigate('AddTask')}
        />
      </View>
      
    </View>
  )
}

export default TasksManager

const styles = StyleSheet.create({
  container:{
    flex:1,
    // borderWidth:1,
    alignItems: 'center'
  },
  buttonView:{
    marginTop: '140%',
    marginRight: '8%',
    alignSelf: 'flex-end'
  }
})