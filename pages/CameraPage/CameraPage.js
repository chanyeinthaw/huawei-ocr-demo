// src/camera.page.js file
import React from 'react';
import { Picker, TouchableOpacity, View, Text } from 'react-native';
import { Camera, Permissions } from 'expo';
import ChooserView from './ChooserView/ChooserView'
import styles from './styles';
import Snapper from "./Snapper/Snapper";

export default class CameraPage extends React.Component {
    camera = null;

    pages = [
        "Myanmar NRC",
        "Passport",
        "License"
    ]

    state = {
        selectedIndex: 0,
        hasCameraPermission: null,
    };

    async componentDidMount() {
        const camera = await Permissions.askAsync(Permissions.CAMERA);
        const hasCameraPermission = camera.status === 'granted';

        this.setState({ hasCameraPermission });
    }

    onCapture = async ()  => {
        if (this.camera) {
            const {base64} = await this.camera.takePictureAsync({base64: true})
        }
    }

    onSelectChange = (v, i) =>
        this.setState({
            ...this.state,
            selectedIndex: i
        })

    render() {
        const { hasCameraPermission, selectedIndex } = this.state;

        if (hasCameraPermission === null) return <View />
        else if (hasCameraPermission === false) return <Text>Access to camera has been denied.</Text>

        return (
            <View style={styles.view}>
                <ChooserView items={this.pages} selectedIndex={selectedIndex} onSelect={this.onSelectChange}/>

                <Camera
                    style={styles.preview}
                    ref={ref => this.camera = ref}
                />

                <Snapper onCapture={this.onCapture}/>
            </View>
        )
    }
}