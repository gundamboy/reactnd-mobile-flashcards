import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";

function configureStore() {
    return createStore(rootReducer, {}, applyMiddleware(thunk, logger));
}

const store = configureStore();
export default store;