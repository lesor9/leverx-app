import * as React from 'react';

import {
    StyledUl,
    StyledNavLink,
    StyledLi,
    StyledNav } from './styles';

import './styles.scss';

export default function Navbar () {
    return (
        <StyledNav>
            <StyledUl>
                <StyledLi>
                    <StyledNavLink className='adress-book' to='/'>Adress Book</StyledNavLink>
                </StyledLi>
                <StyledLi $active>
                    <StyledNavLink $active to='#'>Leave Requests</StyledNavLink>
                </StyledLi>
            </StyledUl>
        </StyledNav>
    );
};