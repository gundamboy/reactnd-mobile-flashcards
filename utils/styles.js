import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    viewWrapper: {
        marginLeft: 8,
        marginRight: 8,
    },
    headerButtons: {
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
    singleDeckImage: {
        width: '100%',
        minHeight: 200,
        marginBottom: 16
    },
    addCardBtnView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc'
    },
    quizCardBtnView: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc'
    },
    submitButtons: {
        alignSelf: 'flex-end',
        alignItems: 'center',
        textAlign: 'center',
        width: 100,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    addCardBtnViewIcon: {
        marginRight: 5
    }
    ,addCardBtnViewText: {
        fontSize: 16
    },
    addCardHeroText: {
        alignSelf: 'center',
        marginTop: 16,
        marginBottom: 36,
        fontSize: 20
    },
    addCardInputContainer: {
        marginBottom: 16,
    },
    addCardInputLabel: {
        fontSize: 18,
    },
    addCardInput: {
        marginBottom: 16,
    }
});
