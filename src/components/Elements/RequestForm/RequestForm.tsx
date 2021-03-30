import * as React from 'react';
import { FC, ReactElement } from 'react';

import { useState } from 'react';
import { useDispatch } from 'react-redux';

import RequestFormFields from './RequestFormFields';

import './styles.scss';

import {
    StyledH2,
    StyledButton,
    StyledSubmitSection,
    StyledFAQ,
    StyledQuestion } from './styles';

import {
    StyledRequestForm,
    StyledImage } from './styles';

import {
    VACATION_LEAVE,
    CLOSE_WITH_SAVING,
    CLOSE_WITHOUT_SAVING } from '../../../constants';    

import "react-datepicker/dist/react-datepicker.css";
import { countDaysBetween } from '../../../helpers/dates';
import ConfirmMessage from '../ConfirmMessage';

import { IReqDetailsInterface } from './types';

import { addRequest } from '../../../actions/requestActions';
import { subtractDays } from '../../../actions/daysActions';

const RequestForm: FC = (): ReactElement => {
    const [requestType, setRequestType] = useState<string>(VACATION_LEAVE);
    const [startDate, setStartDate] = useState<Date>(new Date());
    const [endDate, setEndDate] = useState<Date>(new Date());
    const [comment, setComment] = useState<string>('');
    const [confirmMsg, setConfirmMsg] = useState<boolean>(false);

    const dispatch = useDispatch();

    function changeType(event: React.ChangeEvent<HTMLSelectElement>) {
        setRequestType(event.target.value);
    }

    function handleSubmit(): void {
        setConfirmMsg(true);
    }

    function createRequest(): void {
        const daysBetween: number = countDaysBetween(startDate, endDate);

        dispatch(addRequest({
            type: requestType,
            startDate: startDate,
            endDate: endDate,
            comment: comment,
            created: Date.now(),
            daysBetween: daysBetween,
        }));
        

        if(requestType === VACATION_LEAVE) dispatch(subtractDays(daysBetween));
    }

    function showConfirmMessage(): ReactElement | undefined {
        if(!confirmMsg) return;

        const reqDetails: IReqDetailsInterface = {
            type: requestType,
            startDate: startDate,
            endDate: endDate,
            hideMessage: setConfirmMsg,
            createRequest: createRequest,
        };

        const daysBetween: number = countDaysBetween(startDate, endDate);
        const todayToStartDate: number = countDaysBetween(new Date(), startDate);
        const yesterday: Date = new Date(new Date().setHours(0, 0, 0, 0));

        if(daysBetween < 1 || startDate < yesterday) return (<ConfirmMessage
                                        redQuestion="Sorry, but the time machine is broken, please try again later:("
                                        whiteButton="Ok, got it"
                                        whiteButtonType={CLOSE_WITHOUT_SAVING}
                                        reqDetails={reqDetails} />
        );

        if(requestType === VACATION_LEAVE && todayToStartDate <= 14) return (<ConfirmMessage
                                        redQuestion="Please submit your request at least two weeks before the desired start date."
                                        question="Would you like to confirm the request with the dates as suggested below?"
                                        whiteButton="Confirm anyway"
                                        whiteButtonType={CLOSE_WITH_SAVING}
                                        blueButton="Change dates"
                                        blueButtonType={CLOSE_WITHOUT_SAVING}
                                        reqDetails={reqDetails} />
        );

        if(requestType === VACATION_LEAVE && daysBetween > 14) return (<ConfirmMessage
                                        redQuestion="We know you must be tired. But please consider shoter vacation. How about 2 weeks?"
                                        whiteButton="Confirm anyway"
                                        whiteButtonType={CLOSE_WITH_SAVING}
                                        blueButton="Change dates"
                                        blueButtonType={CLOSE_WITHOUT_SAVING}
                                        reqDetails={reqDetails} />
        );

        return(
            <ConfirmMessage
                question="Please confirm creating a new vacation request:"
                whiteButton="Cancel"
                whiteButtonType={CLOSE_WITHOUT_SAVING}
                blueButton="Confirm"
                blueButtonType={CLOSE_WITH_SAVING}
                reqDetails={reqDetails} />
        )
    }
     
    return(
        <StyledRequestForm>
            <StyledImage src={`/public/images/${requestType}.png`} alt="vacation" />

            <StyledH2>New Request</StyledH2>

            <RequestFormFields
                type={requestType}
                handleTypeChange={changeType}
                comment={comment}
                setComment={setComment}
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate} />

            <StyledSubmitSection>
                <StyledButton onClick={handleSubmit}>Submit</StyledButton>

                <div className='faq-block'>
                    <StyledQuestion>Have questions?</StyledQuestion>
                    <StyledFAQ href="#">Read FAQ</StyledFAQ>
                </div>
            </StyledSubmitSection>

            {showConfirmMessage()}
        </StyledRequestForm>
    );
};

export default RequestForm;