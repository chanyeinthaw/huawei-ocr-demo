import React from 'react'
import {View, TouchableOpacity} from 'react-native'

import styles from './styles'

export default function Snapper({onCapture, loading}) {
    return (
        <View style={styles.snapper}>
            <TouchableOpacity
                disabled={loading}
                onPress={onCapture}
                style={styles.button}
                activeOpicity={1}
            >
                <View style={styles.innerCircle}/>
            </TouchableOpacity>
        </View>
    )
}