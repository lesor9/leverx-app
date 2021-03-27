import * as React from 'react';

import {
    StyledUl,
    StyledNavLink,
    StyledLi,
    StyledNav } from './styles';

export default function Navbar () {
    return (
        <StyledNav>
            <StyledUl>
                <StyledLi>
                    <StyledNavLink to='/'>Adress Book</StyledNavLink>
                </StyledLi>
                <StyledLi active>
                    <StyledNavLink to='#'>Leave Requests</StyledNavLink>
                </StyledLi>
            </StyledUl>
        </StyledNav>
    );
};