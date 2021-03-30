import * as React from 'react';
import { FC, ReactElement } from 'react';

import {
    StyledUl,
    StyledNavLink,
    StyledLi,
    StyledNav } from './styles';

import './styles.scss';


const Navbar: FC = (): ReactElement => {
    return (
        <StyledNav>
            <StyledUl>
                <StyledLi>
                    <StyledNavLink className='adress-book' href='/'>Adress Book</StyledNavLink>
                </StyledLi>
                <StyledLi $active>
                    <StyledNavLink $active href='#'>Leave Requests</StyledNavLink>
                </StyledLi>
            </StyledUl>
        </StyledNav>
    );
};

export default Navbar;