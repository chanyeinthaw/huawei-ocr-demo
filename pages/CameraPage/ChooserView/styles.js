import {Dimensions, StyleSheet} from 'react-native'

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
    chooserView: {
        alignSelf: 'center',
        zIndex: 1,
        elevation: 1,
        width: winWidth,
        top: 0,
        backgroundColor: '#000',
        color: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    chooserItem: {
        zIndex: 2,
        elevation: 2,
        paddingTop: 15,
        paddingBottom: 15
    },

    chooserItemText: {
        color: '#fff'
    },

    chooserItemTextBold: {
        color: '#fff',
        fontWeight: 'bold'
    }
})