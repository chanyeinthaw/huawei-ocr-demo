import {Dimensions, StyleSheet} from 'react-native'

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
    chooserView: {
        position: 'absolute',
        top: 0,
        right: 0,

        alignSelf: 'center',
        width: winWidth,
        backgroundColor: '#000',
        color: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    chooserItem: {
        paddingTop: 15,
        paddingBottom: 15
    },

    chooserItemText: {
        color: '#fff'
    },

    chooserItemTextBold: {
        color: '#03A9F4',
    }
})