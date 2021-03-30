import * as React from 'react';
import { FC, ReactElement } from 'react';

import { countDaysBetween } from '../../../helpers/dates';
import { VACATION_LEAVE } from '../../../constants/index';

import { IRequestInlineShortProps } from './types';

const RequestInlineShort: FC<IRequestInlineShortProps> = (props): ReactElement => {
    const daysBetween: number = countDaysBetween(props.startDate, props.endDate);

    return(
        <div className="request-inline-short">
            <img className='request-inline-short__img' src={`/public/images/${props.type}-icon.png`} alt="reqimg"/>
            
            <div className='request-year-list__item-dates'>
                {props.type}: {(new Date(props.startDate)).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })} - {(new Date(props.endDate)).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })} {props.type === VACATION_LEAVE ? `(${daysBetween} days)` : ''}
            </div>
        </div>
    )
}

export default RequestInlineShort;