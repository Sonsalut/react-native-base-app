import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RNCamera } from 'react-native-camera'
import { useCamera } from 'react-native-camera-hooks'
import ConfirmButton from '../../src/components/buttons/ConfirmButton'

const CameraScreen = () => {
    const [cameraRef, takePicture] = useCamera(null);
    const takePictureHandle = async () => {
        try {
            const data = await takePicture()
            console.log(data.uri);
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <View style={styles.container}>
            <RNCamera
                style={styles.camView}
                ref={cameraRef}
            >
                <View style={styles.cfmBtnView}>
                    <ConfirmButton
                        title='Take Picture'
                    />
                </View>
            </RNCamera>
        </View>
    )
}

export default CameraScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    camView:{
        flex:1
    },
    cfmBtnView:{
        // borderWidth:1,
        height: '10%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
      },
})