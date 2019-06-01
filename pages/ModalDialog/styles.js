import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    appBar: {
        paddingLeft: 20,
        paddingRight: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 48,
        width: '100%',
        backgroundColor: '#000'
    },

    modal: {
        padding: 30,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },

    textView: {
      marginBottom: 12,
    },

    textLabel: {
        fontSize: 12,
        color: '#a5a5a5'
    },

    text: {
        fontSize: 18,
        marginTop: 8
    }
})