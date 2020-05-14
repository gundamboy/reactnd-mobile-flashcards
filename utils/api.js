import AsyncStorage from '@react-native-community/async-storage';
import {FLASHCARDS_STORAGE_KEY} from "./constants";
import {generateDeckUID} from "./helpers";

// notice I have empty callbacks for the last arguments in getItem and setItem. This is because
// the linter was driving me insane with yellow squiggly lines and I hated it and it made me want to rage.

// dummy data for app:
const initialData = {
    'deckOne': {
        id: 'deckOne',
        title: 'React Deck',
        questions: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'
            }
        ],
        deckImgUri: 'http://placeimg.com/1000/260/animals',
    },
    'deckTwo': {
        id: 'deckTwo',
        title: 'Javascript Deck',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ],
        deckImgUri: 'http://placeimg.com/1000/260/arc',
    }
}

export function getData() {
    return initialData;
}

function formatDeckResults(results) {
    return results === null ? initialData : JSON.parse(results);
}

export async function getDecks() {
    try {
        const decks = await AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY);

        if (decks === null) {
            AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(initialData));
        }

        console.log("getDecks(): ", decks);

        return decks === null ? initialData : JSON.parse(decks);
    } catch (err) {
        console.log(err);
    }
}

export async function getDeck(id) {
    try {
        const storeResults = await AsyncStorage.getItem(DECKS_STORAGE_KEY);

        return JSON.parse(storeResults)[id];
    } catch (err) {
        console.log(err);
    }
}

export async function addCardToDeckAS(id, card) {
    try {
        const deck = await getDeck(id);

        await AsyncStorage.mergeItem(
            FLASHCARDS_STORAGE_KEY,
            JSON.stringify({
                [id]: {
                    questions: [...deck.questions].concat(card)
                }
            })
        );
    } catch (err) {
        console.log(err);
    }
}

