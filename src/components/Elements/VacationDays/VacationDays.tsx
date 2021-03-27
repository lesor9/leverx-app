import * as React from 'react';

import {
    StyledVacationDays,
    StyledDetails,
    StyledVacationDaysTitle } from './styles';

export default function Main ()  {
    return(
        <StyledVacationDays>
            <StyledVacationDaysTitle>
                Vacation days
            </StyledVacationDaysTitle>

            <div>
                <div>Available</div>

                <div>147</div>
            </div>

            <StyledDetails>» more details</StyledDetails>
        </StyledVacationDays>
    );
};