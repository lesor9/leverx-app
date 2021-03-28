import * as React from 'react';

import RequestFormInfo from './RequestFormInfo';

import {
    StyledRequestForm,
    StyledImage } from './styles';

import "react-datepicker/dist/react-datepicker.css";    

export default function RequestForm ()  {

    return(
        <StyledRequestForm>
            <StyledImage src="/public/images/vacation.png" alt="vacation" />

            <RequestFormInfo />
        </StyledRequestForm>
    );
};