import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import requestsReducer from './requestsReducer';
import daysReducer from './daysReducer';

const rootReducer = combineReducers({
    requests: requestsReducer,
    days: daysReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeWithDevTools());