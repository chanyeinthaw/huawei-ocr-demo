import React from 'react'
import {View, TouchableOpacity} from 'react-native'
import { Icon } from 'react-native-elements'

import styles from './styles'

export default function Snapper({onCapture, loading}) {
    return (
        <View style={styles.snapper}>
            <View style={styles.setting} hidden={true}><Icon name="settings" type="material" color="#000"/></View>
            <TouchableOpacity
                disabled={loading}
                onPress={onCapture}
                style={styles.button}
                activeOpicity={1}
            >
                <View style={styles.innerCircle}/>
            </TouchableOpacity>
            <View style={styles.setting}>
                <TouchableOpacity>
                    <Icon name="settings" type="material" color="#fff"/>
                </TouchableOpacity>
            </View>
        </View>
    )
}