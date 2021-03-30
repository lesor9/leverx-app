import * as React from 'react';
import { FC, ReactElement } from 'react';

import { 
  StyledProfile, 
  StyledIconImage,
  StyledImage,
  StyledProfileBlock,
  StyledProfileName,
  StyledDivProfile } from './styles';

  const UserControls: FC = (): ReactElement => {

    return (
      <StyledProfile>
        <StyledIconImage src="/public/images/plane.svg" alt="plane" />
        
        <StyledProfileBlock>
            <StyledDivProfile>
              <StyledImage src='/public/images/anna.png'/>
              <StyledProfileName>Anna Smith</StyledProfileName>
            </StyledDivProfile>
        </StyledProfileBlock>

        <StyledIconImage className='log-out-icon' src="/public/images/turn_off.svg" alt="turn off" />
      </StyledProfile>
    );
};

export default UserControls;