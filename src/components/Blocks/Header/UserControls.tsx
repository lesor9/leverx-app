import * as React from 'react';
import { useState, useEffect } from 'react';

import { 
  StyledProfile, 
  StyledIconImage, 
  StyledLink, 
  StyledImage,
  StyledProfileBlock,
  StyledProfileName,
  StyledDivProfile } from './styles';

  export default function UserControls () {

    return (
      <StyledProfile>
        <StyledIconImage src="/public/images/plane.svg" alt="plane" />
        

        <StyledProfileBlock>
            <StyledDivProfile>
              <StyledImage src='/public/images/anna.png'/>
              <StyledProfileName>Anna Smith</StyledProfileName>
            </StyledDivProfile>
          </StyledProfileBlock>

        <StyledIconImage src="/public/images/turn_off.svg" alt="turn off" />
      </StyledProfile>
    );
};