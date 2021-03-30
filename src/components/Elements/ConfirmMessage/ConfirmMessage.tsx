import * as React from 'react';
import { FC, ReactElement } from 'react';

import RequestInlineShort from './RequestInlineShort';
 
import { CLOSE_WITH_SAVING } from '../../../constants';

import "./styles.scss";

import { IConfirmMessageProps } from './types';


const ConfirmMessage: FC<IConfirmMessageProps> = (props): ReactElement => {

    function createRequest(): void {
        props.reqDetails.createRequest();
        props.reqDetails.hideMessage(false);
    }

    function closeMessage(): void {
        props.reqDetails.hideMessage(false)
    }

    function whiteButtons(): ReactElement | undefined {
        if(!props.whiteButton) return;

        return (
            <button onClick={props.whiteButtonType === CLOSE_WITH_SAVING ? createRequest : closeMessage} className="confirm__white">
                {props.whiteButton}
            </button>)
    }

    function blueButtons(): ReactElement | undefined {
        if(!props.blueButton) return;

        return (
            <button onClick={props.blueButtonType === CLOSE_WITH_SAVING ? createRequest : closeMessage} className="confirm__blue">
                {props.blueButton}
            </button>)
    }

    function redQuestion (): ReactElement | undefined {
        if (!props.redQuestion) return;

        return(
            <div className="confrim__red-question">
                {props.redQuestion}
            </div>
        )
    }

    function question (): ReactElement | undefined {
        if (!props.question) return;

        return(
            <div className="confrim__question">
                {props.question}
            </div>
        )
    }

    return(
        <div className="popup">
            <div className="confirm">
                <div className="confirm__request-type">
                    Request a {props.reqDetails.type.toLowerCase()}
                </div>

                <div className="comfirm__messages">
                    {redQuestion()}

                    {question()}

                    <RequestInlineShort
                        type={props.reqDetails.type}
                        startDate={props.reqDetails.startDate}
                        endDate={props.reqDetails.endDate} />
                </div>

                <div className="confirm__bottoms">
                    {whiteButtons()}
                    {blueButtons()}
                </div>
            </div>
        </div>
    )
}

export default ConfirmMessage;