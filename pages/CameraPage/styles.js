// src/styles.js
import { StyleSheet, Dimensions } from 'react-native';
import {StatusBar} from 'react-native';

const { height: winHeight } = Dimensions.get('window');

const winWidth = (winHeight/4) * 3

export default StyleSheet.create({
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