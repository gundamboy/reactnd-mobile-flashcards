import { combineReducers } from 'redux';
import reducerDecks from './reducer-decks'


export default combineReducers({
    decks: reducerDecks
});