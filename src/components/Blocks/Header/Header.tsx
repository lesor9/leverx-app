import * as React from 'react';
import { FC, ReactElement } from 'react';

import Navbar from './Navbar';
import UserControls from './UserControls';

import { 
    StyledHeader,
    StyledHeaderContent,
    StyledLink,
    StyledCompanyHeading,
    StyledServiceHeading } from './styles';

import { StyledWrapper } from '../../App/styles';


const Header: FC = (): ReactElement => {
    return(
        <StyledHeader>
            <StyledWrapper>
                <StyledHeaderContent>
                    <StyledLink href='/'>
                        <StyledCompanyHeading>LEVERX GROUP</StyledCompanyHeading>
                        <StyledServiceHeading>EMPLOYEE SERVICES</StyledServiceHeading>
                    </StyledLink>

                    <Navbar />

                    <UserControls />
                </StyledHeaderContent>
            </StyledWrapper>
        </StyledHeader>
    );
}

export default Header;