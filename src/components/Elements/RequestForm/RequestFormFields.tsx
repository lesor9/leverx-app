import * as React from 'react';
import { FC, ReactElement } from 'react';

import {
    StyledSelect,
    StyledRequestFormInfo,
    StyledCommentSection,
    StyledTextArea } from './styles';

import Dates from './Dates';

import { SICK_LEAVE } from '../../../constants';

import { IRequestFormInfo } from './types';


const RequestFormInfo: FC<IRequestFormInfo> = (props): ReactElement => {
    function sickMsg(): ReactElement | undefined {
        if(props.type !== SICK_LEAVE) return;

        return (
        <div className='sick-leave-msg'>
            <b>Important:</b> Please bring the official confirmation of your sick leave from a medical establishment to Personnel Officer (Katsiaryna Barysik) as soon as you get it.
        </div>);
    }

    return(
        <StyledRequestFormInfo>
            <div className='select'>
                <StyledSelect disabled={props.selectDisabled} className={props.selectDisabled ? 'select-dissabled' : ''} onChange={props.handleTypeChange} defaultValue={props.type}>
                    <option>Vacation leave</option>
                    <option>Sick leave</option>
                    <option>Own expense leave</option>
                </StyledSelect>
            </div>

            {sickMsg()}

            <Dates 
                type={props.type}
                startDate={props.startDate}
                setStartDate={props.setStartDate}
                endDate={props.endDate}
                setEndDate={props.setEndDate}/>

            <StyledCommentSection>
                Comment

                <StyledTextArea
                    defaultValue={props.comment ? props.comment : ''}
                    onChange={(e) => {props.setComment(e.target.value)}} />
            </StyledCommentSection>
        </StyledRequestFormInfo>   
    )
}

export default RequestFormInfo;