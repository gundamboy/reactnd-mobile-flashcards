import {getDecks, addCardToDeckAS, saveDeckAS} from "../../utils/api";
import {ADD_CARD_TO_DECK, GET_ALL_DECKS, ADD_DECK} from "./actionTypes";

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
    console.group("ACTIONS - saveDeck");
    console.log("args: ", deckId, title, deckImgUri);
    console.groupEnd();

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