import React from 'react';
import {BackHandler, View, StatusBar} from 'react-native'
import { AppLoading, SplashScreen } from 'expo';
import CameraPage from "./pages/CameraPage/CameraPage";
import authenticateRequest from "./request/authenticateRequest";

export default class App extends React.Component {
    state = {
        xSubjectToken: ""
    }

    authenticate = () => {
        authenticateRequest().then((response) => {
            if (response.ok == true) {
                this.setState({
                    xSubjectToken: response.headers.get('X-Subject-Token')
                })

                SplashScreen.hide()

                return
            }

            BackHandler.exitApp()
        }).catch((e) => {
            BackHandler.exitApp()
        })
    }

    render() {
        const {xSubjectToken} = this.state

        if (xSubjectToken === '')
            return (
                <AppLoading startAsync={this.authenticate} onFinish={() => {}} autoHideSplash={false} />
            )

        return (
            <View>
                <StatusBar backgroundColor={'#000'} translucent={true} batStyle={'light-content'}/>
                <CameraPage xSubjectToken={xSubjectToken}/>
            </View>
        )
    }
}
