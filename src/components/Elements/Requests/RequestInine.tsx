import * as React from 'react';

import { VACATION_LEAVE } from '../../../constants';

export default function RequestInline(props: any) {

    return(
        <li className={`request-year-list__item ${props.withArrow ? 'withArrow' : ''} ${props.nextElem && props.nextElem() % 2 === 0 ? 'request-year-list__item_dark' : ''}`} key={props.req.created} data-created={props.req.created}>
            <img className='request-year-list__img' src={`/public/images/${props.req.type}-icon.png`} alt="reqimg"/>
                
            <div className='request-year-list__item-desc'> 
                <div className='request-year-list__item-dates'>
                    {props.req.type}: {(new Date(props.req.startDate)).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })} - {(new Date(props.req.endDate)).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })} {props.req.type === VACATION_LEAVE ? `(${props.req.daysBetween} days)` : ''}
                </div>

                <div className='request-year-list__item-created'>
                    Created: {(new Date(props.req.created)).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                </div>

                <div className='request-year-list__item-status request-year-list__item-status_approved'>
                    Approved
                </div>
            </div>
        </li>
    )
}