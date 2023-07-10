import { StyleSheet, Text, View, Modal } from 'react-native'
import React from 'react'
import 'react-native-calendars';
import 'date-fns';
import Calendar from 'react-native-calendars';
import { useState } from 'react';
import ConfirmButton from '../buttons/ConfirmButton';

const PickDateModal = () => {
    // const [showModal, setShowModal] = useState(true)
    return (
        <Modal
            // visible={showModal}
            style={styles.pickDateView}>
            <Calendar />
            <View style={styles.cfmBtnView}>
                <ConfirmButton
                    title='Dismiss'
                    onPress={() => setShowModal(false)}
                />
            </View>
        </Modal>
    )
}

export default PickDateModal

const styles = StyleSheet.create({
    pickDateView: {
        height: '50%',
        width: '100%'
    },
    cfmBtnView: {
        alignItems: 'center'
    }
})