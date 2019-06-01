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

export default class CameraPage extends React.Component {
    camera = null;

    pages = [
        "National ID Card",
        "License"
    ]

    state = {
        nrcInfo: null,
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
        const {xSubjectToken} = this.props
        const {selectedIndex} = this.state

        const request = selectedIndex === 0 ? ocrMyanmarIDRequest : ocrMyanmarLicenseRequest

        if (this.camera) {
            this.setState({...this.state, loading: true})

            const {base64} = await this.camera.takePictureAsync({base64: true})

            const response = await request(xSubjectToken, base64)

            let state = {...this.state, loading: false}
            if (response.ok) {
                state.nrcInfo = (await response.json()).result
            } else {
                Alert.alert('Error', 'Invalid input')
            }

            this.setState(state)
        }
    }

    onSelectChange = (v, i) => this.setState({...this.state, selectedIndex: i})

    hideModal = () => {this.setState({...this.state, nrcInfo: null})}

    render() {
        const { hasCameraPermission, selectedIndex, loading, nrcInfo } = this.state;

        if (hasCameraPermission === null) return <View />
        else if (hasCameraPermission === false) return <Text>Access to camera has been denied.</Text>

        return (
            <View style={styles.view}>
                {
                    loading ?
                        <View style={styles.loading}>
                            <ActivityIndicator size="large" color="#fff" />
                        </View>
                        : null
                }
                <ModalDialog visible={nrcInfo !== null} nrcInfo={nrcInfo} hide={this.hideModal}/>
                <ChooserView items={this.pages} selectedIndex={selectedIndex} onSelect={this.onSelectChange}/>

                <Camera
                    ratio={'1:1'}
                    style={styles.preview}
                    ref={ref => this.camera = ref}
                />

                <Snapper onCapture={this.onCapture} loading={loading}/>
            </View>
        )
    }
}