import {getDecks, addCardToDeckAS, saveDeckAS, deleteDeckAS} from "../../utils/api";
import {ADD_CARD_TO_DECK, GET_ALL_DECKS, ADD_DECK, DELETE_DECK} from "./actionTypes";

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

export function saveDeck(deckId, title, deckImgUri) {

    return (dispatch) => {
        return saveDeckAS(deckId, title, deckImgUri)
            .then((result) => {
                dispatch(addDeck(deckId, title, deckImgUri));
            });
    }
}

export function addDeck(deckId, title, deckImgUri) {
    return {
        type: ADD_DECK,
        deckId,
        title,
        deckImgUri
    };
}

export function deleteDeck(id) {
    return (dispatch) => {
        return deleteDeckAS(id)
            .then(() => {
                dispatch(removeDeck(id));
            })
    };
}

export function removeDeck(id) {
    return {
        type: DELETE_DECK,
        id
    };
}
