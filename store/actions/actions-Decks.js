import {getDecks, addCardToDeck, getDeck} from "../../utils/api";
import {ADD_CARD_TO_DECK, GET_ALL_DECKS, GET_SINGLE_DECK} from "./actionTypes";

export function handleGetAllDecks() {
    return (dispatch) => {
        return getDecks()
            .then((decks) => {
            dispatch(getAllDecks(decks));
        });
    }
}

export function getAllDecks(decks) {
    return {
        type: GET_ALL_DECKS,
        decks
    }
}

export function getDeckById(id) {
    return (dispatch) => {
        return getDeck(id)
            .then((deck) => {
                dispatch(getSingleDeck(deck));
            });
    }
}

export function getSingleDeck(deck) {
    return {
        type: GET_SINGLE_DECK,
        deck
    }
}

export function addNewCardToDeck(id, card) {
    return (dispatch) => {
        return addCardToDeck({id, card})
            .then((decks) => {
                dispatch(addCard(decks, id));
            })
    }
}

export function addCard(decks, id) {
    return {
        type: ADD_CARD_TO_DECK,
        decks,
        id
    }
}