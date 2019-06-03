import React from 'react'
import {View, TouchableOpacity} from 'react-native'
import { Icon } from 'react-native-elements'

import styles from './styles'

export default function Snapper({onCapture, loading}) {
    return (
        <View style={styles.snapper}>
            <Icon name="settings" type="material" color="rgba(0,0,0,0)"/>
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
                    <Icon name="settings" type="material" color="rgba(0,0,0,0)"/>
                </TouchableOpacity>
            </View>
        </View>
    )
}