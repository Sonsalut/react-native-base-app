import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const AddTaskScreen = () => {
  return (
    <View>
        <Text>AddTaskScreen</Text>
        <TextInput
            placeholder='What you are going to do today?'
            style={{
                width: '80%',
                height: '25%',
                alignSelf: 'center',
                borderRadius: 15,
                borderWidth:1,
                backgroundColor: 'white'
            }}
            
        />
    </View>
  )
}

export default AddTaskScreen

const styles = StyleSheet.create({})