import * as React from 'react';
import { FC, ReactElement } from 'react';

import { IDaysProps } from './types';


const Days: FC<IDaysProps> = (props): ReactElement => {
    return(
        <div className='date-picker__days'>
            <div className='date-picker__days-top'>
                Day(s)
                <div className='question' />
            </div>

            <input className='date-picker__days-input' value={props.daysBetweenDates} disabled type="text"/>
        </div>
    )
}

export default Days;