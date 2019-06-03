// src/camera.page.js file
import React from 'react';
import {ActivityIndicator, Alert, View, Text } from 'react-native';
import {Camera, Permissions } from 'expo';
import ChooserView from './ChooserView/ChooserView'
import styles from './styles';
import Snapper from "./Snapper/Snapper";
import ocrMyanmarIDRequest from "../../request/ocrMyanmarIDRequest";
import ModalDialog from "../ModalDialog/ModalDialog";
import ocrMyanmarLicenseRequest from "../../request/ocrMyanmarLicenseRequest";
import Store from "../../Store";

export default class CameraPage extends React.Component {
    camera = null;
    store = new Store(['authToken'])

    pages = [
        "National ID Card",
        "License"
    ]

    state = {
        pictureSize: '',
        data: null,
        loading: false,
        selectedIndex: 0,
        hasCameraPermission: null,
    };

    async componentDidMount() {
        const camera = await Permissions.askAsync(Permissions.CAMERA);
        const hasCameraPermission = camera.status === 'granted';

        this.setState({ hasCameraPermission });
    }

    onCapture = async ()  => {
        const authToken = await this.store.authToken
        const {selectedIndex} = this.state

        const request = selectedIndex === 0 ? ocrMyanmarIDRequest : ocrMyanmarLicenseRequest

        if (this.camera) {
            this.setState({...this.state, loading: true})

            const {base64} = await this.camera.takePictureAsync({base64: true})

            const response = await request(authToken, base64)

            let state = {...this.state, loading: false}
            if (response.ok) {
                state.data = (await response.json()).result
            } else {
                Alert.alert('Oops', 'Something is not right with the input image!\nYou might want to take it again.')
            }

            this.setState(state)
        }
    }

    onCameraReady = async () => {
        const imageSizes = await this.camera.getAvailablePictureSizesAsync('16:9')

        this.setState({...this.state, pictureSize: imageSizes[0] || ''})
    }

    onSelectChange = (v, i) => this.setState({...this.state, selectedIndex: i})

    hideModal = () => {this.setState({...this.state, data: null})}

    render() {
        const { hasCameraPermission, selectedIndex, loading, data, pictureSize } = this.state;

        if (hasCameraPermission === null) return <View />
        else if (hasCameraPermission === false) return <Text>Access to camera has been denied.</Text>

        return (
            <View style={styles.view}>
                {
                    !loading ?
                        <View style={styles.loading}>
                            <ActivityIndicator size="large" color="#fff" />
                            <Text style={styles.loadingText}>Working on it ...</Text>
                        </View>
                        : null
                }
                <ModalDialog visible={data !== null} data={data} hide={this.hideModal}/>

                <Camera
                    ratio={'16:9'}
                    onCameraReady={this.onCameraReady}
                    pictureSize={pictureSize}
                    style={styles.preview}
                    ref={ref => this.camera = ref}
                />

                <ChooserView items={this.pages} selectedIndex={selectedIndex} onSelect={this.onSelectChange}/>
                <Snapper onCapture={this.onCapture} loading={loading}/>
            </View>
        )
    }
}