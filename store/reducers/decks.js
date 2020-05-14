import {
    ADD_CARD_TO_DECK,
    GET_ALL_DECKS,
    GET_SINGLE_DECK
} from "../actions/actionTypes";

export default function decks(state = {}, action) {
    switch (action.type) {
        case GET_ALL_DECKS:
            return {
                ...state,
                ...action.decks
            };
        case ADD_CARD_TO_DECK:
            const { deckId, card } = action;
            return {
                ...state,
                [deckId]: {
                    ...state[deckId],
                    questions: [...state[deckId].questions].concat(card)
                }
            };
        case GET_SINGLE_DECK:
            return {
                ...state,
                singleDeck: action.deck
            }
        default:
            return state;
    }
};

