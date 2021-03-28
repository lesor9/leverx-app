import * as React from 'react';

import DatePicker from "react-datepicker";

import './styles.scss';

import { 
    StyledInclusiveSpan,
    StyledDateBlock,
    StyledDateContainer } from './styles';

import Days from './Days';

import { countDaysBetween } from '../../../helpers/dates';

import {
    VACATION_LEAVE,
    SICK_LEAVE,
    OWN_EXPENCE_LEAVE } from '../../../constants/';

export default function Dates (props: any) {
    const daysBetweenDates: any = countDaysBetween(props.startDate, props.endDate);

    function days() {
        if(props.type === VACATION_LEAVE) {
            return (<Days daysBetweenDates={daysBetweenDates}/>);
        }
    }

    return(
        <StyledDateContainer type={props.type}>
            <StyledDateBlock>
                Start Date
                <StyledInclusiveSpan> (inclusive)</StyledInclusiveSpan>
                <DatePicker
                    className={`date-picker ${props.type === SICK_LEAVE || props.type === OWN_EXPENCE_LEAVE ? 'date-picker_wide' : ''}`}
                    selected={props.startDate}
                    onChange={(date: Date) => props.setStartDate(date)}
                    dateFormat={'d MMM yyyy'} />
            </StyledDateBlock>

            <StyledDateBlock>
                {props.type === SICK_LEAVE ? 'Expected End Date' : 'End Date'}
                <StyledInclusiveSpan> (inclusive)</StyledInclusiveSpan>
                <DatePicker
                    className={`date-picker ${props.type === SICK_LEAVE || props.type === OWN_EXPENCE_LEAVE ? 'date-picker_wide' : ''}`}
                    selected={props.endDate}
                    onChange={(date: Date) => props.setEndDate(date)}
                    dateFormat={'d MMM yyyy'} />
            </StyledDateBlock>

            {days()}
        </StyledDateContainer>
    )
}