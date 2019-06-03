import React from 'react'
import {ScrollView, View, TouchableOpacity, Modal, Text} from 'react-native'
import styles from './styles'
export default function ModalDialog({visible, data, hide}) {
    data = data || {}

    return (
        <Modal onRequestClose={() => {}} transparent={false} animationType="slide" visible={visible}>
            <View style={styles.appBar}>
                <Text>{'Done'}</Text>
                <Text style={{color: '#fff', fontWeight: 'bold'}}>{'Converted'}</Text>
                <TouchableOpacity onPress={hide}>
                    <Text style={{color: '#fff'}}>{'DONE'}</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={styles.modal}>
                    {
                        Object.keys(data).map(k => typeof data[k] === 'string' ?
                            <View style={styles.textView} key={k}>
                                <Text style={styles.textLabel}>{k.toUpperCase()}</Text>
                                <Text style={styles.text}>{data[k] === '' ? '<unknown>' : data[k]}</Text>
                            </View> : null
                        )
                    }
                </View>
            </ScrollView>
        </Modal>
    )
}