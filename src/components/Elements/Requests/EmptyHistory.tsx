import * as React from 'react';
import { FC, ReactElement } from 'react';


const EmptyHistory: FC = (): ReactElement => {
    return(
        <div>
            <img className='requests__img' src="/public/images/empty_history.png" alt="history"/>

            <div className='requests__msg'>No vacation requests yet</div>

            <div className='requests__msg-desc'>As soon as you create your first request,<br /> you can find it here</div>
        </div>
    );
};

export default EmptyHistory;