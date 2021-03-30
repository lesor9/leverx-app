import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import requestsReducer from './requestsReducer';
import vacationDaysReducer from './vacationDaysReducer';

const rootReducer = combineReducers({
    requests: requestsReducer,
    vacationDays: vacationDaysReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeWithDevTools());