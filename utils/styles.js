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
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingBottom: 8,
        marginBottom: 8,
    },
    cardTitle: {
        fontSize: 18
    },
    singleDeckBtnRow: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    deleteDeckBtnRow: {
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
        padding: 8,
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
        marginRight: 4
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
    },


    cardButtonRowQuiz: {
        marginBottom: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardButtonRowQuizAnswers: {
        marginBottom: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardButtonRowQuizComplete: {
        marginBottom: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardBodyQuiz: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
        marginTop: 8,
        paddingBottom: 32,
        paddingTop: 32,
    },
    cardFooterQuiz: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        paddingTop: 16,
        marginTop: 8,
    },
    QuizCardBtnView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 8,
        borderWidth: 1,
        borderColor: '#ccc'
    },
    quizCardBtnView: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 8,
        borderWidth: 1,
        borderColor: '#ccc'
    },
    btnQuiz: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8
    },
    btnQuizCorrect: {

    },
    btnQuizIncorrect: {

    },
    btnQuizAnswer: {

    },
    quizBodyText: {
        fontSize: 24,
        textAlign: 'center'
    },
});
