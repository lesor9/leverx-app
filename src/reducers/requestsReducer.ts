import { SET_REQUEST } from '../constants/';

export default (state: Array<any> = [], action: any) => {
    switch (action.type) {
        case SET_REQUEST:
            return [...state, action.payload];
        default:
            return state;
    }
};