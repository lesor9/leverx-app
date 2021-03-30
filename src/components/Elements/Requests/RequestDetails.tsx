import * as React from 'react';

import { useDispatch } from 'react-redux';

import RequestInline from './RequestInline';
import Approves from './Approves';

import { 
    CANCEL_REQUEST,
    SUBTRACT_VACATIONAL_DAYS,
    VACATION_LEAVE } from '../../../constants';

export default function RequestDetails(props: any) {
    const dispatch = useDispatch();

    const approves = {
        'Already approved': [
            {
                name: 'John Smith',
                comment: 'Have a nice vacation!',
            },
            {
                name: 'John Smith',
                comment: 'Have a nice vacation!',
            }
        ],

        'Current approver(s)': [
            {
                name: 'Will McConnel',
            },
        ],

        'Next approver(s)': [
            {
                name: 'John Smith',
            },
            {
                name: 'Mike Smith',
            },
        ],

        'Documents registration (final step)': [
            {
                name: 'Katrin Brown',
            },
        ]
    };

    function handleCansel () {
        dispatch({type: CANCEL_REQUEST, payload: props.reqDetails.created});
        if( props.reqDetails.type === VACATION_LEAVE) dispatch({type: SUBTRACT_VACATIONAL_DAYS, payload: -props.reqDetails.daysBetween});
        props.setReqDetails(false);
    }

    function handleEdit () {
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