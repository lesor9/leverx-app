import * as React from 'react';
import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';

import RequestFormFields from './RequestFormFields';

import './styles.scss';

import {
    StyledSelect,
    StyledH2,
    StyledRequestFormInfo,
    StyledCommentSection,
    StyledTextArea,
    StyledButton,
    StyledSubmitSection,
    StyledFAQ,
    StyledQuestion } from './styles';

import {
    StyledRequestForm,
    StyledImage } from './styles';

import {
    VACATION_LEAVE,
    SICK_LEAVE,
    OWN_EXPENCE_LEAVE,
    ADD_REQUEST,
    SUBTRACT_VACATIONAL_DAYS } from '../../../constants';    

import "react-datepicker/dist/react-datepicker.css";
import { countDaysBetween } from '../../../helpers/dates';

export default function RequestForm ()  {
    const [requestType, setRequestType] = useState(VACATION_LEAVE);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [comment, setComment] = useState('');

    const dispatch = useDispatch();

    function changeType(e: any) {
        setRequestType(e.target.value);
    }

    function handleSubmit() {
        const daysBetween = countDaysBetween(startDate, endDate);

        dispatch({type: ADD_REQUEST, payload: {
            type: requestType,
            startDate: startDate,
            endDate: endDate,
            comment: comment,
            created: Date.now(),
            daysBetween: daysBetween,
        }});

        if(requestType === VACATION_LEAVE) dispatch({type: SUBTRACT_VACATIONAL_DAYS, payload: daysBetween});
    }

    return(
        <StyledRequestForm>
            <StyledImage src={`/public/images/${requestType}.png`} alt="vacation" />

            <StyledH2>New Request</StyledH2>

            <RequestFormFields
                type={requestType}
                handleTypeChange={changeType}
                comment={comment}
                setComment={setComment}
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate} />

            <StyledSubmitSection>
                <StyledButton onClick={handleSubmit}>Submit</StyledButton>

                <div className='faq-block'>
                    <StyledQuestion>Have questions?</StyledQuestion>
                    <StyledFAQ href="#">Read FAQ</StyledFAQ>
                </div>
            </StyledSubmitSection>
        </StyledRequestForm>
    );
};