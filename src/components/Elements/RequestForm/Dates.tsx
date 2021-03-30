import * as React from 'react';
import { FC, ReactElement } from 'react';

import DatePicker from "react-datepicker";

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

import { IDatesProps } from './types';

const Dates: FC<IDatesProps> = (props): ReactElement => {
    const daysBetweenDates: number = countDaysBetween(props.startDate, props.endDate);

    function days(): void | ReactElement {
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

export default Dates;