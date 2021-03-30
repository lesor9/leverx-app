import * as React from 'react';
import { FC, ReactElement } from 'react';

import { useState } from 'react';
import { useDispatch } from 'react-redux';

import RequestInline from './RequestInline';

import { VACATION_LEAVE } from '../../../constants';

import RequestFormFields from '../RequestForm/RequestFormFields';

import { countDaysBetween } from '../../../helpers/dates';

import { IRequestEditProps } from './types';

import { subtractDays } from '../../../actions/daysActions';
import { updateRequest } from '../../../actions/requestActions';


const RequestEdit: FC<IRequestEditProps> = (props): ReactElement => {
    const [startDate, setStartDate] = useState<Date>(props.reqEdit.startDate);
    const [endDate, setEndDate] = useState<Date>(props.reqEdit.endDate);
    const [comment, setComment] = useState<string>(props.reqEdit.comment);
    
    const dispatch = useDispatch();

    const saveUpdatedRequest = (): void => {
        const daysBetween: number = countDaysBetween(startDate, endDate);

        dispatch(updateRequest({
            type: props.reqEdit.type,
            startDate: startDate,
            endDate: endDate,
            comment: comment,
            created: props.reqEdit.created,
            daysBetween: daysBetween,
        }));
        
        if(props.reqEdit.type === VACATION_LEAVE) dispatch(subtractDays(daysBetween - props.reqEdit.daysBetween));

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
                    handleTypeChange={(event: React.ChangeEvent<HTMLSelectElement>) => event}
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

export default RequestEdit;