import { IDaysAction } from '../reducers/types';
import { SUBTRACT_VACATIONAL_DAYS } from '../constants/';

export function subtractDays (days: number): IDaysAction {
    return {
        type: SUBTRACT_VACATIONAL_DAYS,
        payload: days,
    }
}