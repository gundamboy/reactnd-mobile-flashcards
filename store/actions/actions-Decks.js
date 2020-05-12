import { getDecks } from "../../utils/api";
import {GET_ALL_DECKS} from "./actionTypes";

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