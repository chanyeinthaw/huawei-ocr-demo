import React from 'react'
import {Button, View, TouchableOpacity, Text} from 'react-native'

import styles from './styles'

export default function ChooserView({items=[], selectedIndex=0, onSelect}) {
    const onPress = () => {
        console.log('hi')
    }
    return (
        <View style={styles.chooserView}>
            {items.map((v, i) => {
                return (
                    <TouchableOpacity
                        onPress={() => onSelect(v, i)}
                        key={i}
                        activeOpicity={1}
                        style={styles.chooserItem}>
                        {
                            i === selectedIndex ?
                                <Text style={styles.chooserItemTextBold}>{v}</Text> :
                                <Text style={styles.chooserItemText}>{v}</Text>
                        }
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}