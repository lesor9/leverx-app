import * as React from 'react';

import RequestInline from './RequestInline';

export default function RequestYearList (props: any)  {

    return(
        <div className='request-year-list'>
            <div className='request-year-list__year'>
                {props.year}
            </div>

            <ul className='request-year-list__list' onClick={props.handleRequestClick}>
                {props.requests.map((req: any) => (
                    <RequestInline
                        withArrow
                        key={req.created}
                        req={req}
                        nextElem={props.nextElem} />
                ))}
            </ul>
        </div>
    );
};