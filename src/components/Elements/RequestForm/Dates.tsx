import * as React from 'react';

import { useState } from "react";

import DatePicker from "react-datepicker";

import './styles.scss';

import { 
    StyledInclusiveSpan,
    StyledDateBlock,
    StyledDateContainer } from './styles';

export default function Dates () {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const MILLISECONDS_IN_DAY = 86400000;
    const INCLUSIVE_DAY = 1;

    let daysBetweenDates = (endDate.getTime() - startDate.getTime()) / MILLISECONDS_IN_DAY;
    daysBetweenDates = Math.ceil(daysBetweenDates) + INCLUSIVE_DAY;

    return(
        <StyledDateContainer>
            <StyledDateBlock>
                Start Date
                <StyledInclusiveSpan> (inclusive)</StyledInclusiveSpan>
                <DatePicker
                    className='date-picker'
                    selected={startDate}
                    onChange={(date: Date) => setStartDate(date)}
                    dateFormat={'d MMM yyyy'} />
            </StyledDateBlock>

            <StyledDateBlock>
                End Date
                <StyledInclusiveSpan> (inclusive)</StyledInclusiveSpan>
                <DatePicker
                    className='date-picker'
                    selected={endDate}
                    onChange={(date: Date) => setEndDate(date)}
                    dateFormat={'d MMM yyyy'} />
            </StyledDateBlock>

            <div className='date-picker__days'>
                <div className='date-picker__days-top'>
                    Day(s)
                    <div className='question' />
                </div>

                <input className='date-picker__days-input' value={daysBetweenDates} disabled type="text"/>
            </div>
        </StyledDateContainer>
    )
}