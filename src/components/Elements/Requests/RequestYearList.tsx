import * as React from 'react';

import { VACATION_LEAVE } from '../../../constants';

export default function RequestYearList (props: any)  {
    console.log(props);

    return(
        <div className='request-year-list'>
            <div className='request-year-list__year'>
                {props.year}
            </div>

            <ul className='request-year-list__list'>
                {props.requests.map((req: any) => (
                    <li className={`request-year-list__item ${props.nextElem() % 2 === 0 ? 'request-year-list__item_dark' : ''}`} key={req.created}>
                    <img className='request-year-list__img' src={`/public/images/${req.type}-icon.png`} alt="reqimg"/>
                        
                    <div className='request-year-list__item-desc'> 
                        <div className='request-year-list__item-dates'>
                            {req.type}: {(new Date(req.startDate)).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })} - {(new Date(req.endDate)).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })} {req.type === VACATION_LEAVE ? `(${req.daysBetween} days)` : ''}
                        </div>

                        <div className='request-year-list__item-created'>
                            Created: {(new Date(req.created)).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                        </div>

                        <div className='request-year-list__item-status request-year-list__item-status_approved'>
                            Approved
                        </div>
                    </div>
                </li>
                ))}
            </ul>
        </div>
    );
};