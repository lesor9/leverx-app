import { 
    ADD_REQUEST,
    DELETE_REQUEST,
    UPDATE_REQUEST } from '../constants/';

export default (state: Array<any> = [], action: any) => {
    switch (action.type) {
        case ADD_REQUEST:
            return [...state, action.payload];
        case UPDATE_REQUEST:
            const temp = state.filter((req) => req.created !== action.payload.created);
            return [...temp, action.payload];
        case DELETE_REQUEST:
            return state.filter((req) => req.created !== action.payload);
        default:
            return state;
    }
};