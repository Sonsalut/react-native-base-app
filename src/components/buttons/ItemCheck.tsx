import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
// import {RadioButton} from 'react-native-paper'

const ItemCheck = () => {
    const [check, setCheck] = useState('');
    const isChecked = () => {
        console.log(check)
    }
    return (

        <TouchableOpacity
            onPress={isChecked}
            style={styles.outterRing}>
            
            <View style={styles.innerSpot} />
        </TouchableOpacity>
    )
}

export default ItemCheck

const styles = StyleSheet.create({
    outterRing: {
        borderWidth: 1,
        borderColor: 'orange',
        height: 15,
        width: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 45
    },
    innerSpot: {
        backgroundColor: 'orange',
        height: 10,
        width: 10,
        borderRadius: 45
    }
})