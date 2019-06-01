import React from 'react'
import {View, TouchableOpacity} from 'react-native'

import styles from './styles'

export default function Snapper({onCapture}) {
    return (
        <View style={styles.snapper}>
            <TouchableOpacity
                onPress={onCapture}
                style={styles.button}
                activeOpicity={1}
            >
                <View style={styles.innerCircle}/>
            </TouchableOpacity>
        </View>
    )
}