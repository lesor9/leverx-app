import * as React from 'react';

import Navbar from './Navbar';
import UserControls from './UserControls';

import { 
    StyledHeader,
    StyledHeaderContent,
    StyledLink,
    StyledCompanyHeading,
    StyledServiceHeading } from './styles';

import { StyledWrapper } from '../../App/styles';


export default function Header ()  {
    return(
        <StyledHeader>
            <StyledWrapper>
                <StyledHeaderContent>
                    <StyledLink to='/'>
                        <StyledCompanyHeading>LEVERX GROUP</StyledCompanyHeading>
                        <StyledServiceHeading>EMPLOYEE SERVICES</StyledServiceHeading>
                    </StyledLink>

                    <Navbar />

                    <UserControls />
                </StyledHeaderContent>
            </StyledWrapper>
        </StyledHeader>
    );
};