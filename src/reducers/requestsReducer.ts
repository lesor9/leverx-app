import { 
    ADD_REQUEST,
    CANCEL_REQUEST,
    UPDATE_REQUEST } from '../constants/';

import { IRequest, IRequestAction } from './types';

export default (state: Array<IRequest> = [], action: IRequestAction): Array<IRequest> => {
    switch (action.type) {
        case ADD_REQUEST:
            return [...state, action.payload];
        case UPDATE_REQUEST:
            const temp = state.filter((req) => req.created !== action.payload.created);
            return [...temp, action.payload];
        case CANCEL_REQUEST:
            return state.filter((req: IRequest) => req.created !== action.payload.created);
        default:
            return state;
    }
};