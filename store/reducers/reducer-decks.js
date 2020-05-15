import {ADD_CARD_TO_DECK, ADD_DECK, GET_ALL_DECKS, GET_SINGLE_DECK} from "../actions/actionTypes";

export default function reducerDecks(state = {}, action) {
    switch (action.type) {
        case GET_ALL_DECKS:
            return {
                ...state,
                ...action.decks
            };
        case ADD_CARD_TO_DECK:
            return {
                ...state,
                [action.deckId]: {
                    ...state[action.deckId],
                    questions: [...state[action.deckId].questions].concat(action.card)
                }
            };
        case GET_SINGLE_DECK:
            return {
                ...state,
                singleDeck: action.deck
            }
        case ADD_DECK:
            return {
                ...state,
                [action.deckId]: {
                    id: action.deckId,
                    title: action.title,
                    questions: [],
                    deckImgUri: action.deckImgUri
                }
            };
        default:
            return state;
    }
};

