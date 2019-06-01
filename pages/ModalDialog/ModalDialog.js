import React from 'react'
import {View, TouchableOpacity, Modal, Text} from 'react-native'
import styles from './styles'
export default class ModalDialog extends React.Component {
    render() {
        let {visible, nrcInfo} = this.props

        nrcInfo = nrcInfo || {}

        return (
            <Modal
                onRequestClose={() => {}}
                transparent={false}
                animationType="slide"
                visible={visible}
            >
                <TouchableOpacity
                    onPress={() => this.props.hide()}
                    >
                    <View style={styles.modal}>
                        {
                            Object.keys(nrcInfo).map(k =>
                                <View style={styles.textView} key={k}>
                                    <Text style={styles.textLabel}>{k}</Text>
                                    <Text style={styles.text}>{nrcInfo[k]}</Text>
                                </View>
                            )
                        }
                    </View>
                </TouchableOpacity>
            </Modal>
        )
    }
}