import * as React from 'react';
import { useState } from "react";
import {useSelector, useDispatch} from 'react-redux';

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

import Dates from './Dates';

import './styles.scss';

import {
    VACATION_LEAVE,
    SICK_LEAVE,
    OWN_EXPENCE_LEAVE,
    SET_REQUEST } from '../../../constants/';

import { countDaysBetween } from '../../../helpers/dates';

export default function RequestFormInfo (props: any) {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const dispatch = useDispatch();

    function sickMsg() {
        if(props.type !== SICK_LEAVE) return;

        return (
        <div className='sick-leave-msg'>
            <b>Important:</b> Please bring the official confirmation of your sick leave from a medical establishment to Personnel Officer (Katsiaryna Barysik) as soon as you get it.
        </div>);
    }

    let comment = '';

    function handleSubmit() {
        dispatch({type: SET_REQUEST, payload: {
            type: props.type,
            startDate: startDate,
            endDate: endDate,
            comment: comment,
            created: Date.now(),
            daysBetween: countDaysBetween(startDate, endDate),
        }});
    }

    return(
        <StyledRequestFormInfo>
            <StyledH2>New Request</StyledH2>

            <div className='select'>
                <StyledSelect onChange={props.handleTypeChange} defaultValue='Vacation leave'>
                    <option>Vacation leave</option>
                    <option>Sick leave</option>
                    <option>Own expense leave</option>
                </StyledSelect>
            </div>

            {sickMsg()}

            <Dates 
                type={props.type}
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}/>

            <StyledCommentSection>
                Comment

                <StyledTextArea onChange={(e) => {comment = e.target.value}} />
            </StyledCommentSection>

            <StyledSubmitSection>
                <StyledButton onClick={handleSubmit}>Submit</StyledButton>

                <div className='faq-block'>
                    <StyledQuestion>Have questions?</StyledQuestion>
                    <StyledFAQ href="#">Read FAQ</StyledFAQ>
                </div>
            </StyledSubmitSection>
        </StyledRequestFormInfo>   
    )
}