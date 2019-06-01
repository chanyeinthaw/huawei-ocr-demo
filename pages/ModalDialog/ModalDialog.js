import React from 'react'
import {ScrollView, View, TouchableOpacity, Modal, Text} from 'react-native'
import styles from './styles'
export default class ModalDialog extends React.Component {
    render() {
        let {visible, nrcInfo} = this.props

        nrcInfo = nrcInfo || {}

        return (
            <Modal onRequestClose={() => {}} transparent={false} animationType="slide" visible={visible}>
                <View style={styles.appBar}>
                    <TouchableOpacity onPress={this.props.hide}>
                        <Text style={{color: '#fff'}}>{'DONE'}</Text>
                    </TouchableOpacity>
                    <Text style={{color: '#fff', fontWeight: 'bold'}}>{'Converted'}</Text>
                    <Text>{'Done'}</Text>
                </View>
                <ScrollView>
                    <View style={styles.modal}>
                        {
                            Object.keys(nrcInfo).map(k =>
                                <View style={styles.textView} key={k}>
                                    <Text style={styles.textLabel}>{k.toUpperCase()}</Text>
                                    <Text style={styles.text}>{nrcInfo[k] === '' ? '<unknown>' : nrcInfo[k]}</Text>
                                </View>
                            )
                        }
                    </View>
                </ScrollView>
            </Modal>
        )
    }
}