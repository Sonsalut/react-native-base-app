import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import AddButton from '../../src/components/buttons/AddButton'
import { useState } from 'react';
import Tasks from '../../src/components/tasks/Tasks';



const AddTaskScreen = () => {
  const [newTask, setNewTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);
  const handleAddTask = () => {
    console.log(newTask)
    setTaskItems([...taskItems, newTask])
    setNewTask(null)
  }
  return (
    <View style={styles.container}>
      {/* <Text>AddTaskScreen</Text> */}
      <TextInput
        onChangeText={text => setNewTask(text)}
        value={newTask}
        placeholder='What you are going to do today?'
        style={styles.inputStyle}
      />
      {
        taskItems.map((item) => {
          return <Tasks text={item}/>
        })
      }
      {/* <Tasks text={newTask} />
      <Tasks text={newTask} />
      <Tasks text={newTask} /> */}
      <View style={styles.addBtnView}>
        <AddButton
          onPress={handleAddTask}
        />
      </View>
    </View>
  )
}

export default AddTaskScreen

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    flex: 1
  },
  inputStyle: {
    width: '80%',
    height: '10%',
    alignSelf: 'center',
    marginVertical: '5%',
    borderRadius: 15,
    borderWidth: 1,
    paddingLeft: '5%',
    backgroundColor: 'white'
  },
  addBtnView:{
    position: 'absolute',
    bottom: '5%',
    right: '5%',
    // borderWidth:1
  }
})