import {getDecks, addCardToDeckAS} from "../../utils/api";
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

export function addCardToDeck(deckId, card) {
    return (dispatch) => {
        return addCardToDeckAS(deckId, card)
            .then(() => {
                dispatch(saveCardToDeck(deckId, card));
            })
    }
}

export function saveCardToDeck(deckId, card) {
    return {
        type: ADD_CARD_TO_DECK,
        deckId,
        card
    };
}