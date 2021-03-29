import * as React from 'react';

export default function Days (props: any) {

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