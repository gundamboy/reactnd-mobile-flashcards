import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    viewWrapper: {
        marginLeft: 8,
        marginRight: 8,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    singleDeckBtnRow: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    singleDeckImage: {
        width: '100%',
        minHeight: 200,
        marginBottom: 16
    },
});
