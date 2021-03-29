import * as React from 'react';

export default function Approves(props: any) {
    return (
        <div className='approves'>
            {Object.keys(props.approves).map((approveStage, stageInd) => {
                return(
                    <div className='approve' key={stageInd}>
                        <div className='approves__title'>{approveStage}</div>

                        {props.approves[approveStage].map((approver: any, approverInd: any) => {
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