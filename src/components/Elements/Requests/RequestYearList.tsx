import * as React from 'react';


export default function RequestYearList (props: any)  {
    console.log(props);

    return(
        <div className='request-year-list'>
            <div className='request-year-list__year'>
                {props.year}
            </div>

            <ul className='request-year-list__list'>
                {props.requests.map((req: any) => (
                    <li className='request-year-list__item'>
                    <img className='request-year-list__img' src={`/public/images/${req.type}-icon.png`} alt="reqimg"/>
                        
                    <div className='request-year-list__item-desc'> 
                        <div className='request-year-list__item-dates'>
                            Vacation: {(new Date(req.startDate)).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })} - {(new Date(req.endDate)).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })} ({req.daysBetween} days)
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