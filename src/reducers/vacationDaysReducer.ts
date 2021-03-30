import { SUBTRACT_VACATIONAL_DAYS } from '../constants/';
import { IDaysAction } from './types';

export default (state = 147, action: IDaysAction): number => {
    switch (action.type) {
        case SUBTRACT_VACATIONAL_DAYS:
            return state - action.payload;
        default:
            return state;
    }
};