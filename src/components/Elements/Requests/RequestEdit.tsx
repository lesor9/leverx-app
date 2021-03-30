import * as React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import RequestInline from './RequestInline';

import { 
    SUBTRACT_VACATIONAL_DAYS,
    VACATION_LEAVE,
    UPDATE_REQUEST } from '../../../constants';

import RequestFormFields from '../RequestForm/RequestFormFields';

import { countDaysBetween } from '../../../helpers/dates';

export default function RequestEdit (props: any) {
    const [startDate, setStartDate] = useState(props.reqEdit.startDate);
    const [endDate, setEndDate] = useState(props.reqEdit.endDate);
    const [comment, setComment] = useState(props.reqEdit.comment);
    
    const dispatch = useDispatch();

    const saveUpdatedRequest = () => {
        const daysBetween = countDaysBetween(startDate, endDate);

        dispatch({type: UPDATE_REQUEST, payload: {
            type: props.reqEdit.type,
            startDate: startDate,
            endDate: endDate,
            comment: comment,
            created: props.reqEdit.created,
            daysBetween: daysBetween,
        }});

        if(props.reqEdit.type === VACATION_LEAVE) dispatch({type: SUBTRACT_VACATIONAL_DAYS, payload: daysBetween - props.reqEdit.daysBetween});

        props.setReqEdit(false)
    };

    return (
        <div className='req-edit'>
            <div>
                <div className='req-edit__type'>
                    <span className='req-edit__title'>Change request</span>
                </div>
                
                <RequestInline req={props.reqEdit} />

                <RequestFormFields
                    type={props.reqEdit.type}
                    handleTypeChange={() => {}}
                    selectDisabled
                    comment={props.reqEdit.comment}
                    setComment={setComment}
                    startDate={startDate}
                    setStartDate={setStartDate}
                    endDate={endDate}
                    setEndDate={setEndDate} />
            </div>

            <div className='req-details__controls'>
                <button onClick={() => {props.setReqEdit(false)}} className="req-details__button">CANSEL</button>
                <button onClick={saveUpdatedRequest} className="req-details__blue-button">SAVE</button>
            </div>
        </div>
    );
}