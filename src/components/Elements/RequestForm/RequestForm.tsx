import * as React from 'react';
import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';

import RequestFormFields from './RequestFormFields';

import './styles.scss';

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

import {
    StyledRequestForm,
    StyledImage } from './styles';

import {
    VACATION_LEAVE,
    SICK_LEAVE,
    OWN_EXPENCE_LEAVE,
    ADD_REQUEST,
    SUBTRACT_VACATIONAL_DAYS,
    CLOSE_WITH_SAVING,
    CLOSE_WITHOUT_SAVING } from '../../../constants';    

import "react-datepicker/dist/react-datepicker.css";
import { countDaysBetween } from '../../../helpers/dates';
import ConfirmMessage from '../ConfirmMessage';

export default function RequestForm ()  {
    const [requestType, setRequestType] = useState(VACATION_LEAVE);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [comment, setComment] = useState('');
    const [confirmMsg, setConfirmMsg] = useState(false);

    const dispatch = useDispatch();

    function changeType(e: any) {
        setRequestType(e.target.value);
    }

    function handleSubmit() {
        setConfirmMsg(true);
    }

    function createRequest() {
        const daysBetween = countDaysBetween(startDate, endDate);

        dispatch({type: ADD_REQUEST, payload: {
            type: requestType,
            startDate: startDate,
            endDate: endDate,
            comment: comment,
            created: Date.now(),
            daysBetween: daysBetween,
        }});

        if(requestType === VACATION_LEAVE) dispatch({type: SUBTRACT_VACATIONAL_DAYS, payload: daysBetween});
    }

    function showConfirmMessage() {
        if(!confirmMsg) return;

        const reqDetails = {
            type: requestType,
            startDate: startDate,
            endDate: endDate,
            hideMessage: setConfirmMsg,
            createRequest: createRequest,
        };

        const daysBetween = countDaysBetween(startDate, endDate);
        const todayToStartDate = countDaysBetween(new Date(), startDate);
        const yesterday = new Date(new Date().setHours(0, 0, 0, 0));

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