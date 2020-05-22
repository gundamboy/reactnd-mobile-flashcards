import React from 'react';
import { StyleSheet } from 'react-native';

const footerTextColor = '#585858';
const buttonTextColor = '#1597af';
const badgeColor = '#1597af';
const buttonBorderColor = '#d2d2d2';
const white = '#fff';
const correct = '#4bbb8d';
const incorrect = '#db684d';
const error = '#db684d';

export default StyleSheet.create({
    errorMessageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    addDeckErrorMessageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        minHeight: 40,
    },
    errorMessageIcon: {
        color: error,
        flex: 1
    },
    errorMessageText: {
        color: error,
        paddingLeft: 8,
        paddingRight: 8,
        flex: 2
    },
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
    cardPaddingFix: {
        paddingTop: 8,
        paddingLeft: 16,
        paddingRight: 16,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    deckListCardCountRow: {
        justifyContent: 'center',
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
    buttonRow: {
        backgroundColor: '#eeeeee',
        borderTopWidth: 1,
        borderColor: '#e9e9e9'
    },





    singleDeckTitle: {
        fontSize: 26,
        textAlign: 'center',
        justifyContent: 'center',
        marginBottom: 8,
    },
    singleDeckCardBadge: {
        padding: 12,
        backgroundColor: badgeColor
    },
    singleDeckCardBadgeText: {
        color: white
    },
    singleDeckCardBody: {
        justifyContent: 'center',
        marginBottom: 8,
        marginTop: 8,
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
        alignItems: 'center',
    },
    singleDeckButtonWrap: {
        flex: 1,
        alignItems: 'center'
    },
    singleDeckButtons: {
        paddingTop: 8,
        paddingBottom: 8,
    },
    singleDeckBtnAddCardView: {
        borderRightWidth: 1,
        borderRightColor: buttonBorderColor
    },
    singleDeckBtnAddCardBtnViewIcon: {
        color: buttonTextColor
    }
    ,
    singleDeckBtnAddCardBtnIconText: {
        fontSize: 16,
        color: buttonTextColor
    },
    singleDeckAddQuestionText: {
        textAlign: 'center',
        width: '75%',
        color: buttonTextColor
    },





    addNewDeckForm: {
        marginBottom: 16,
    },
    addDeckInputContainer: {

    },
    addNeDeckInputStyles: {
        fontSize: 14,
        paddingTop: 0,
        paddingBottom: 0,
        margin: 0
    },
    addDeckInputLabel: {
        fontSize: 16,
    },
    addNewDeckCardBody: {
        paddingTop: 8,
        paddingLeft: 16,
        paddingRight: 16,
    },
    addNewDeckSubmitButtons: {
        alignSelf: 'flex-end',
        alignItems: 'center',
        textAlign: 'center',
        width: 100,
        padding: 8,
        borderLeftWidth: 1,
        borderLeftColor: buttonBorderColor,
    },
    addNewDeckSubmitButtonText: {
        color: buttonTextColor
    },
    addNewDeckHeroText: {
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: 16,
        marginBottom: 36,
        fontSize: 20,
    },







    addNewCardBody: {
        paddingTop: 8,
        paddingLeft: 16,
        paddingRight: 16,
    },
    addNewCardHeroText: {
        alignSelf: 'center',
        textAlign: 'center',
        paddingLeft: 8,
        paddingRight: 8,
        marginTop: 8,
        marginBottom: 8,
        fontSize: 20,
    },
    addNewCardForm: {
        marginBottom: 16,
    },
    addCardInputContainer: {
        marginBottom: 16,
    },
    addNewCardInputStyles: {
        fontSize: 14,
        paddingTop: 0,
        paddingBottom: 0,
        margin: 0
    },
    addCardInputLabel: {
        fontSize: 16,
    },
    addCardInput: {
        marginBottom: 16,
    },
    addNewCardBtnRow: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    addNewCardSubmitButton: {
        padding: 8,
        paddingTop: 16,
        paddingBottom: 16,
        borderLeftWidth: 1,
        borderColor: buttonBorderColor,
    },
    addNewCardSubmitButtonText: {
        color: buttonTextColor
    },










    quizBodyText: {
        fontSize: 24,
        textAlign: 'center'
    },
    quizQuestionTotalRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingBottom: 8,
        marginBottom: 8,
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
    quizCardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    quizCompleteCardFooter: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quizViewAnswerIcon: {
        marginRight: 4
    },
    quizAnswerButton: {
        flexDirection: 'row',
        padding: 8,
        paddingLeft: 20,
        paddingRight: 20,
        borderColor: buttonBorderColor,
        borderLeftWidth: 1
    },
    quizCompleteButtonWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        flex: 1
    },
    quizCompleteButton: {
        paddingTop: 8,
        paddingBottom: 8,
        borderColor: buttonBorderColor,
        flexGrow: 1,
    },
    quizCompleteHomeButton: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
        flexGrow: 2,

    },
    quizButtonText: {
        color: buttonTextColor,
        textAlign: 'center'
    },
    btnQuizCorrect: {
        color: buttonTextColor,
    },
    btnQuizIncorrect: {
        color: buttonTextColor
    },
    quizFooterText: {
        paddingLeft: 8,
        color: footerTextColor
    },

});
