import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    snapper: {
        height: 150,
        backgroundColor: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 80,
        borderColor: '#fff',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 100
    },

    innerCircle: {
        width: 75,
        height: 75,
        borderRadius: 100,
        backgroundColor: '#fff'
    },
})