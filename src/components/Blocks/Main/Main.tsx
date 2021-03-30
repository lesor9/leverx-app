import * as React from 'react';
import { FC, ReactElement } from 'react';

import VacationDays from '../../Elements/VacationDays';
import RequestForm from '../../Elements/RequestForm';
import Requests from '../../Elements/Requests';

import { StyledWrapper } from '../../App/styles';

import { StyledMain, StyledMainContent } from './styles';


const Main: FC = (): ReactElement => {
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

export default Main;