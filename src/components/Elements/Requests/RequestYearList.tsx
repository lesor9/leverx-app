import * as React from 'react';
import { FC, ReactElement } from 'react';

import RequestInline from './RequestInline';

import { IRequest } from '../../../reducers/types';
import { IRequestYearListProps } from './types';


const RequestYearList: FC<IRequestYearListProps> = (props): ReactElement  => {
    return(
        <div className='request-year-list'>
            <div className='request-year-list__year'>
                {props.year}
            </div>

            <ul className='request-year-list__list' onClick={props.handleRequestClick}>
                {props.requests.map((req: IRequest) => (
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

export default RequestYearList;