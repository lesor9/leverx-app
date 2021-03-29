import { 
    ADD_REQUEST,
    CANCEL_REQUEST,
    UPDATE_REQUEST } from '../constants/';

export default (state: Array<any> = [], action: any) => {
    switch (action.type) {
        case ADD_REQUEST:
            return [...state, action.payload];
        case UPDATE_REQUEST:
            const temp = state.filter((req) => req.created !== action.payload.created);
            return [...temp, action.payload];
        case CANCEL_REQUEST:
            return state.filter((req) => req.created !== action.payload);
        default:
            return state;
    }
};