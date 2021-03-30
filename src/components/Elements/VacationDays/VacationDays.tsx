import * as React from 'react';
import { FC, ReactElement } from 'react';

import { useTypedSelector } from '../../../hooks/useTypedSelector';

import './styles.scss';

import {
    StyledVacationDays,
    StyledDetails,
    StyledVacationDaysTitle,
    StyledVacationDaysInfo } from './styles';

const VacationDays: FC = (): ReactElement => {
    const vacationDays = useTypedSelector((state) => state.vacationDays);

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

export default VacationDays;