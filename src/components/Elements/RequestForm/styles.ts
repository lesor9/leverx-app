import styled from 'styled-components';

import {
    VACATION_LEAVE,
    SICK_LEAVE,
    OWN_EXPENCE_LEAVE } from '../../../constants/';

interface requestProps {
    type: string;
}

export const StyledRequestForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 470px;
    margin-top: 10px;
    box-shadow: 0px 1px 3px rgba(32, 75, 146, 0.15);
    border-radius: 5px;
    background-color: white;
`;

export const StyledImage = styled.img`
    width: 470px;
    height: 170px;
`;

export const StyledSelect = styled.select`
    border: 1px solid #DAE1E8;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 7px 8px;
    width: 100%;
    font-size: 13px;
    line-height: 18px;
    color: #333D47;
    outline: none;
    appearance: none;
    cursor: pointer;
`;

export const StyledH2 = styled.h2`
    font-size: 18px;
    line-height: 24px;
    margin: 0;
    margin-top: 29px;
    margin-left: 30px
`;

export const StyledRequestFormInfo = styled.div`
    margin: 12px 80px 20px 30px;
    width: 360px;
`;

export const StyledCommentSection = styled.div`
    font-size: 13px;
    line-height: 18px;
    color: #333D47;
    font-weight: 600;
    padding-top: 19.8px;
`;

export const StyledTextArea = styled.textarea`
    resize: none;
    border: 1px solid #DAE1E8;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    width: 361px;
    height: 80px;
    box-sizing: border-box;
`;

export const StyledButton = styled.button`
    background: #5495FF;
    border-radius: 3px;
    border: none;
    width: 120px;
    height: 36px;
    color: white;
    cursor: pointer;
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    margin-bottom: 30px;
    margin-left: 30px;
`;

export const StyledSubmitSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;

export const StyledFAQ = styled.a`
    font-size: 13px;
    line-height: 18px;
    color: rgba(84, 149, 255, 1);
    text-decoration: none;
    margin-left: 5px; 
    letter-spacing: -.4px;
`;

export const StyledQuestion = styled.span`
    font-size: 13px;
    line-height: 18px;
    color: #333333;
    letter-spacing: -.1px;
`;

export const StyledInclusiveSpan = styled.span`
    color: #C0C0C0;
    font-weight: 400;
`;

export const StyledDateBlock = styled.div`
    color: #333D47;
    font-weight: 600;
    font-size: 13px;
`;

export const StyledDateContainer = styled.div<requestProps>`
    display: flex;
    padding-top: ${(props: requestProps) => props.type === SICK_LEAVE ? '28px' : '17px'};
`;
