import * as React from 'react';
import { useSelector } from 'react-redux';
import './styles.scss';

import {
    StyledVacationDays,
    StyledDetails,
    StyledVacationDaysTitle,
    StyledVacationDaysInfo } from './styles';

export default function VacationDays ()  {
    const vacationDays = useSelector((state: any) => state.vacationDays);

    return(
        <StyledVacationDays>
            <StyledVacationDaysTitle>
                Vacation Days
            </StyledVacationDaysTitle>

            <StyledVacationDaysInfo>
                <span>Available</span>

                <span>{vacationDays}</span>
            </StyledVacationDaysInfo>

            <StyledDetails>
                <span className='more-details'>»</span> more details</StyledDetails>
        </StyledVacationDays>
    );
};