import * as React from 'react';
import { useState } from 'react';

import RequestFormInfo from './RequestFormInfo';

import {
    StyledRequestForm,
    StyledImage } from './styles';

import {
    VACATION_LEAVE,
    SICK_LEAVE,
    OWN_EXPENCE_LEAVE } from '../../../constants/';

import "react-datepicker/dist/react-datepicker.css";    

export default function RequestForm ()  {
    const [request, setRequest] = useState(VACATION_LEAVE);

    function changeType(e: any) {
        setRequest(e.target.value);
    }

    return(
        <StyledRequestForm>
            <StyledImage src={`/public/images/${request}.png`} alt="vacation" />

            <RequestFormInfo type={request} handleTypeChange={changeType} />
        </StyledRequestForm>
    );
};