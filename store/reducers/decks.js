import {
    ADD_CARD_TO_DECK,
    GET_ALL_DECKS,
    GET_SINGLE_DECK
} from "../actions/actionTypes";

const initialState = {
    allDecks: {},
    singleDeck: {}
}

export default function decks(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_DECKS:
            return {
                ...state,
                allDecks: action.decks
            };
        case ADD_CARD_TO_DECK:
            return {
                ...state,
                singleDeck: action.decks[action.id],
            }
        case GET_SINGLE_DECK:
            return {
                ...state,
                singleDeck: action.deck
            }
        default:
            return state;
    }
};

