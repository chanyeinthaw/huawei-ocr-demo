import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    snapper: {
        position: 'absolute',
        bottom: 0,
        right: 0,

        width: '100%',
        height: 120,
        backgroundColor: 'rgba(0,0,0,.2)',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    grow: {
        flex: 1
    },

    setting: {
       display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height: 70,
        borderColor: '#fff',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 100
    },

    innerCircle: {
        width: 65,
        height: 65,
        borderRadius: 100,
        backgroundColor: '#fff'
    },
})