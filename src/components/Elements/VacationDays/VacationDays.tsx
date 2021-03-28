import * as React from 'react';

import './styles.scss';

import {
    StyledVacationDays,
    StyledDetails,
    StyledVacationDaysTitle,
    StyledVacationDaysInfo } from './styles';

export default function VacationDays ()  {
    return(
        <StyledVacationDays>
            <StyledVacationDaysTitle>
                Vacation Days
            </StyledVacationDaysTitle>

            <StyledVacationDaysInfo>
                <span>Available</span>

                <span>147</span>
            </StyledVacationDaysInfo>

            <StyledDetails>
                <span className='more-details'>»</span> more details</StyledDetails>
        </StyledVacationDays>
    );
};