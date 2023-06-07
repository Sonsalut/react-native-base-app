import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

interface AddButtonProps {
  onPress?: () => void,

}

const AddButton = ({
  onPress
}:AddButtonProps) => {
  return (
    <TouchableOpacity 
      style={styles.floatAddBtn}
      onPress={onPress}
    >
        <Image 
            source={require('../../assets/images/plus.png')}
            style={styles.plusBtn}
        />
      {/* <Text>AddButton</Text> */}
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    floatAddBtn:{
        // borderWidth:1,
        borderRadius: 180,
        height: 50,
        width: 50,
        // backgroundColor: 'green'
    },
    plusBtn: {
        height: 50,
        width: 50,
        borderRadius: 180,
        // borderWidth:1
    }
})

export default AddButton