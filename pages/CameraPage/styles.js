// src/styles.js
import { StyleSheet, Dimensions } from 'react-native';
import {StatusBar} from 'react-native';

const { width: _winWidth, height: winHeight } = Dimensions.get('window');

const winWidth = (winHeight/4) * 3

export default StyleSheet.create({

    loading: {
        position: 'absolute',
        height: winHeight,
        width: _winWidth,
        top: 0,
        right: 0,
        elevation: 2,
        opacity: .7,
        backgroundColor: '#000',
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
        width: winWidth,
        height: winHeight,
        maxHeight: winHeight - 199,
        overflow: 'hidden',
    }
});