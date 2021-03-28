import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import requestsReducer from './requestsReducer';

export const store = createStore(requestsReducer, composeWithDevTools());