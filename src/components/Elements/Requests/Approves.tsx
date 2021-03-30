import * as React from 'react';
import { FC, ReactElement } from 'react';

import { IApprovesProps, IApprover } from './types';


const Approves: FC<IApprovesProps> = (props): ReactElement => {
    return (
        <div className='approves'>
            {Object.keys(props.approves).map((approveStage: string, stageInd: number) => {
                return(
                    <div className='approve' key={stageInd}>
                        <div className='approves__title'>{approveStage}</div>

                        {props.approves[approveStage].map((approver: IApprover, approverInd: number) => {
                            return(
                            <div className='approver' key={approverInd}>
                                <img className='approver__img' src="/public/images/face.png" alt="user pic"/>

                                <div className='approver__info'>
                                    <div className='approves__approver-name'>{approver.name}</div>
                                    {approver.comment ? <div className='approves__approver-comment'>Comments: {approver.comment}</div> : ''}
                                </div>

                            </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    );
}

export default Approves;