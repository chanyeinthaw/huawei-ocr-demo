// src/styles.js
import { StyleSheet, Dimensions } from 'react-native';
import {StatusBar} from 'react-native';

const { height: winHeight } = Dimensions.get('window');

export default StyleSheet.create({
    loadingText: {
        color: '#fff',
        marginTop: 10
    },

    loading: {
        position: 'absolute',
        height: winHeight,
        width: '100%',
        top: 0,
        right: 0,
        elevation: 2,
        backgroundColor: 'rgba(0,0,0,.7)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    view: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: StatusBar.currentHeight,
    },

    preview: {
        width: '100%',
        height: winHeight
    }
});