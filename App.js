import React from 'react';
import {BackHandler, View, StatusBar, Alert} from 'react-native'
import { AppLoading, SplashScreen } from 'expo';
import CameraPage from "./pages/CameraPage/CameraPage";
import authenticateRequest from "./request/authenticateRequest";
import Store from "./Store";

export default class App extends React.Component {
    state = {
        xSubjectToken: ""
    }

    store = new Store(['authToken', 'authTokenExpiresAt'])

    authenticate = async () => {
        const token = await this.store.authToken
        const expiresAt = await this.store.authTokenExpiresAt

        if (token != null && expiresAt != null && expiresAt < new Date()) {
            this.setState({xSubjectToken: token})
            SplashScreen.hide()

            return
        }

        authenticateRequest().then(async (response) => {
            if (response.ok == true) {
                const token = response.headers.get('X-Subject-Token')
                const data = await response.json()
                const _token = data.token || {}

                await this.store.setAuthToken(token)
                await this.store.setAuthTokenExpiresAt(new Date(_token.expires_at || Date.now()))

                this.setState({xSubjectToken: token})
                SplashScreen.hide()

                return
            }

            SplashScreen.hide()
            Alert.alert(
                'Oops',
                'I can not authenticate to server.',
                [
                    {text: 'OK', onPress: () => BackHandler.exitApp()},
                ]
            )
        }).catch(() => {

            SplashScreen.hide()
            Alert.alert(
                'Oops',
                'I can not get access to server.\n Please check your network connectivity and open me again.',
                [
                    {text: 'OK', onPress: () => BackHandler.exitApp()},
                ]
            )
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
                <CameraPage />
            </View>
        )
    }
}
