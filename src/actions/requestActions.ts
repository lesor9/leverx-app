import { 
    ADD_REQUEST,
    CANCEL_REQUEST,
    UPDATE_REQUEST } from '../constants/';

import {
    IRequest,
    IRequestAction } from '../reducers/types';

export function addRequest (req: IRequest): IRequestAction {
    return {
        type: ADD_REQUEST,
        payload: req,
    }
}

export function cancelRequest (req: IRequest): IRequestAction {
    return {
        type: CANCEL_REQUEST,
        payload: req,
    }
}

export function updateRequest (req: IRequest): IRequestAction {
    return {
        type: UPDATE_REQUEST,
        payload: req,
    }
}