import React from 'react';
import {View, StatusBar} from 'react-native'
import CameraPage from "./pages/CameraPage/CameraPage";

export default class App extends React.Component {
    render() {
        return (
            <View>
                <StatusBar backgroundColor={'#000'} translucent={true} batStyle={'light-content'}/>
                <CameraPage />
            </View>
        );
    }
}