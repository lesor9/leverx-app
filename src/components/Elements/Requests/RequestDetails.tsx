import * as React from 'react';
import { FC, ReactElement } from 'react';

import { useDispatch } from 'react-redux';

import RequestInline from './RequestInline';
import Approves from './Approves';

import { 
    CANCEL_REQUEST,
    VACATION_LEAVE } from '../../../constants';

import approves from './approvesInfo';

import { IRequestDetailsProps } from './types';

import { subtractDays } from '../../../actions/daysActions';


const RequestDetails: FC<IRequestDetailsProps> = (props): ReactElement => {
    const dispatch = useDispatch();

    function handleCansel (): void {
        dispatch({type: CANCEL_REQUEST, payload: { created: props.reqDetails.created }});
        if(props.reqDetails.type === VACATION_LEAVE) dispatch(subtractDays(-props.reqDetails.daysBetween));
        props.setReqDetails(false);
    }

    function handleEdit (): void {
        props.setReqDetails(false);
        props.setReqEdit(props.reqDetails);
    }

    return (
        <div className='req-details'>
            <div>
                <div className='req-details__type'>
                    <span className="details__type-title">Request for {props.reqDetails.type.toLowerCase()}</span>
                    <img 
                        onClick={() => {navigator.clipboard.writeText(props.reqDetails.type)}}
                        className='req-details__copy-img'
                        src="/public/images/copy.png"
                        alt="copy"/>
                </div>
                

                <RequestInline req={props.reqDetails} />

                <Approves approves={approves}/>
            </div>

            <div className='req-details__controls'>
                <button onClick={handleCansel} className="req-details__button">CANCEL REQUEST</button>
                <button onClick={handleEdit} className="req-details__button">CHANGE</button>
                <button onClick={() => {props.setReqDetails(false)}} className="req-details__blue-button">CLOSE</button>
            </div>
        </div>
    );
}

export default RequestDetails;