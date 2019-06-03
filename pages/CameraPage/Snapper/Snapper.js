import React from 'react'
import {View, TouchableOpacity} from 'react-native'
import { Icon } from 'react-native-elements'

import styles from './styles'

export default function Snapper({onCapture, loading}) {
    return (
        <View style={styles.snapper}>
            {/*<View style={styles.grow}/>*/}
            <View style={[styles.grow, styles.buttonWrapper]}>
                <TouchableOpacity
                    disabled={loading}
                    onPress={onCapture}
                    style={styles.button}
                    activeOpicity={1}
                >
                    <View style={styles.innerCircle}/>
                </TouchableOpacity>
            </View>
            {/*<View style={[styles.setting, styles.grow]}>*/}
            {/*    <TouchableOpacity>*/}
            {/*        <Icon name="settings" type="material" color="rgba(0,0,0,1)"/>*/}
            {/*    </TouchableOpacity>*/}
            {/*</View>*/}
        </View>
    )
}