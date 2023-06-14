import { StyleSheet, Text, View } from 'react-native'
import {RadioButton} from 'react-native-paper'
import React from 'react'
import ItemCheck from '../buttons/ItemCheck'

interface TasksProp {
    text?: string,
}

const Tasks = ({
    text
}:TasksProp) => {
  return (
    <View style={styles.taskView}>
        <View style={styles.iconView}>

        </View>
        <Text style={styles.textStyle}>{text}</Text>
    </View>
  )
}

export default Tasks

const styles = StyleSheet.create({
    taskView:{
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 15,
        width: '90%',
        height: '8%',
        flexDirection: 'row',
        marginVertical: '3%'
        // justifyContent: 'space-around'
    },
    textStyle:{
        // borderWidth:1,
        alignSelf: 'center',
        marginLeft: '5%',
        // fontSize: 
    },
    iconView: {
        borderWidth:1,
        width: '20%'
    }
})