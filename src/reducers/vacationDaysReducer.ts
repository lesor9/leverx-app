import { SUBTRACT_VACATIONAL_DAYS } from '../constants/';

export default (state: number = 147, action: any) => {
    switch (action.type) {
        case SUBTRACT_VACATIONAL_DAYS:
            return state - action.payload;
        default:
            return state;
    }
};