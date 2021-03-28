import * as React from 'react';

import {
    StyledSelect,
    StyledH2,
    StyledRequestFormInfo,
    StyledCommentSection,
    StyledTextArea,
    StyledButton,
    StyledSubmitSection,
    StyledFAQ,
    StyledQuestion } from './styles';

import Dates from './Dates';

import './styles.scss';

export default function RequestFormInfo () {


    return(
        <StyledRequestFormInfo>
            <StyledH2>New Request</StyledH2>

            <div className='select'>
                <StyledSelect defaultValue='Vacation leave'>
                    <option>Vacation leave</option>
                    <option>Sick leave</option>
                    <option>Own expense leave</option>
                </StyledSelect>
            </div>


            <Dates />

            <StyledCommentSection>
                Comment

                <StyledTextArea />
            </StyledCommentSection>

            <StyledSubmitSection>
                <StyledButton>Submit</StyledButton>

                <div className='faq-block'>
                    <StyledQuestion>Have questions?</StyledQuestion>
                    <StyledFAQ href="#">Read FAQ</StyledFAQ>
                </div>
            </StyledSubmitSection>
        </StyledRequestFormInfo>   
    )
}