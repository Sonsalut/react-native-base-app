import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'

interface AddButtonProps {
    title?: string,
    onPress?: () => void
}

const ConfirmButton = ({
    title,
    onPress
}:AddButtonProps) => {
  return (
    <TouchableOpacity
        style={styles.confirmBtn}
        onPress={onPress}
        // backgroundColor={styles.confirmBtn}
    >
      <Text
        style={styles.BtnText}
      >{title}</Text>
    </TouchableOpacity>
  )
}

export default ConfirmButton

const styles = StyleSheet.create({
    confirmBtn:{
        width: 230,
        height: 45,
        borderRadius: 30,
        backgroundColor: '#2D5672',
        alignItems: 'center',
        justifyContent: 'center'
    },
    BtnText:{
        color: 'white',
        fontSize: 21,
        fontWeight: 'bold'
    }
})