import * as React from 'react';
import { useState } from "react";

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

import {
    VACATION_LEAVE,
    SICK_LEAVE,
    OWN_EXPENCE_LEAVE,
    ADD_REQUEST } from '../../../constants';

export default function RequestFormInfo (props: any) {
    function sickMsg() {
        if(props.type !== SICK_LEAVE) return;

        return (
        <div className='sick-leave-msg'>
            <b>Important:</b> Please bring the official confirmation of your sick leave from a medical establishment to Personnel Officer (Katsiaryna Barysik) as soon as you get it.
        </div>);
    }

    return(
        <StyledRequestFormInfo>
            <div className='select'>
                <StyledSelect disabled={props.selectDisabled} className={props.selectDisabled ? 'select-dissabled' : ''} onChange={props.handleTypeChange} defaultValue={props.type}>
                    <option>Vacation leave</option>
                    <option>Sick leave</option>
                    <option>Own expense leave</option>
                </StyledSelect>
            </div>

            {sickMsg()}

            <Dates 
                type={props.type}
                startDate={props.startDate}
                setStartDate={props.setStartDate}
                endDate={props.endDate}
                setEndDate={props.setEndDate}/>

            <StyledCommentSection>
                Comment

                <StyledTextArea
                    defaultValue={props.comment ? props.comment : ''}
                    onChange={(e) => {props.setComment(e.target.value)}} />
            </StyledCommentSection>
        </StyledRequestFormInfo>   
    )
}