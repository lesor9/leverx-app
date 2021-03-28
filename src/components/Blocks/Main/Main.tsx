import * as React from 'react';

import VacationDays from '../../Elements/VacationDays';
import RequestForm from '../../Elements/RequestForm';
import Requests from '../../Elements/Requests';

import { StyledWrapper } from '../../App/styles';

import { StyledMain, StyledMainContent } from './styles';

export default function Main ()  {
    return(
        <StyledMain>
            <StyledWrapper>
                <StyledMainContent>
                <div>
                    <VacationDays />
                    <RequestForm />
                </div>

                <Requests />
                </StyledMainContent>
            </StyledWrapper>
        </StyledMain>
    );
};