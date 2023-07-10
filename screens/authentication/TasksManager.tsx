import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native'
import React from 'react'
import AddButton from '../../src/components/buttons/AddButton'
import 'react-native-calendars' 
import 'date-fns'
import { useState } from 'react'
import ConfirmButton from '../../src/components/buttons/ConfirmButton'
import { Calendar } from 'react-native-calendars'
import { RNCamera } from 'react-native-camera'
import CameraScreen from './CameraScreen'
import { useSelector, useDispatch } from 'react-redux'
import { showCalendar,hideCalendar } from '../../src/redux/actions/showCalendar'


const TasksManager = ({navigation}) => {
  const [showModal, setShowModal] = useState(false)
  // const [visible, isVisbile] = useState(true)
  // const calendarHandle = useSelector((state) => state.calendarHandle)
  // const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.cfmBtnView}>
        <ConfirmButton
          title='Show Calendar'
          // onPress={() => dispatch(showCalendar())}
          onPress={() => setShowModal(true)}
        />
      </View>
      <View style={styles.cfmBtnView}>
        <ConfirmButton
          title='Show Camera'
          onPress={() => navigation.navigate(CameraScreen)}
        />
      </View>
      <Modal 
        visible={showModal}
        // presentationStyle='formSheet'
      >
        <Calendar
          firstDay={1}
          // style={styles.calendar}
          
        />
        <View style={styles.cfmBtnView}>
          <ConfirmButton
            title='Dismiss'
            onPress={() => setShowModal(false)}
          />
        </View>
      </Modal>
      <View style={styles.addBtnView}>
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
  addBtnView:{
    position: 'absolute',
    bottom: '5%',
    right: '5%', 
  },
  cfmBtnView:{
    // borderWidth:1,
    height: '10%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  dateModal:{
    // height: '10%',
    // paddingTop: '5%',
    backgroundColor: 'transparent',
    
  },
  calendar:{
    // height:1
    borderWidth:1,
    height: '70%',
    borderRadius: 30,
  }
})