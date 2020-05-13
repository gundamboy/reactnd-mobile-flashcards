import AsyncStorage from '@react-native-community/async-storage';
import {FLASHCARDS_STORAGE_KEY} from "./constants";
import {generateDeckUID} from "./helpers";

// notice I have empty callbacks for the last arguments in getItem and setItem. This is because
// the linter was driving me insane with yellow squiggly lines and I hated it and it made me want to rage.

// dummy data for app:
// https://esqsoft.com/javascript_examples/date-to-epoch.htm  <-- to get date epochs for dummy data

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
        created: 1588793894
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
        created: 1588698610
    }
}

export async function getDecks () {
    return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
        .then((decks) => {
            if (decks !== null) {
                return JSON.parse(decks);
            } else {
                AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(initialData));
                return initialData;
            }
        })
}

export async function getDeck (id) {
    console.log("API - getDeck(id): ", id);
    return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
        .then((decks) => {
            console.log("API - decks: ", decks);
        return JSON.parse(decks[id]);
    })
        .catch((e) => {
        return "There is no deck with this id.";
    })
}

export async function saveDeckTitle ({ title }) {
    const id = generateDeckUID();
    const deck = {
        id: id,
        title: title,
        questions: []
    };

    await AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({[id]: deck}));
    return deck;
}

export function addCardToDeck ({id, card}) {

    return getDecks().then((decks) => {

        console.group("API addCardToDeck");
            console.log("id: ", id);
            console.log("total decks: ", Object.keys(decks).length);
            console.log("decks: ", decks);
            console.log("decks[id]: ", decks[id]);
        console.groupEnd()

        decks[id].questions.push(card);
        console.log("decks[id] after push: ", decks[id]);
        AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(decks));
        return decks;
    });

}

export async function deleteDeck({ deckId }) {
    return await AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
        .then((results) => {
            const data = JSON.parse(results);
            delete data[deckId];

            AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(data));
        })
        .catch((e) => {
            return `Unable to delete deck: ${e.message}`
        });
}

