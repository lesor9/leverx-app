import * as React from 'react';
import { FC, ReactElement } from 'react';

import { useState } from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

import EmptyHistory from './EmptyHistory';
import RequestYearList from './RequestYearList';
import RequestDetails from './RequestDetails';
import RequestEdit from './RequestEdit';

import { sortDates, devideToYears } from '../../../helpers/dates';

import { IRequest } from '../../../reducers/types';
import { ISortedRequest } from './types';

import './styles.scss';

const Requests: FC = (): ReactElement => {
    const [reqDetails, setReqDetails] = useState<IRequest | false>(false);
    const [reqEdit, setReqEdit] = useState<IRequest | false>(false);

    const requests = useTypedSelector((state) => state.requests);
    requests.sort(sortDates);
    const sortedRequests: ISortedRequest = requests.reduce(devideToYears, {});

    function handleRequestClick(event: React.MouseEvent<HTMLUListElement>) {
        const target = event.target as HTMLElement;
        const clickedRequest: HTMLElement = target.closest('.request-year-list__item');
        const { created } = clickedRequest.dataset;
        const clickedReqData: IRequest = requests.find((req: IRequest) => req.created === Number(created));

        setReqDetails(clickedReqData);
    }

    function createReqList(): JSX.Element | Array<ReactElement> {
        if(!Object.entries(sortedRequests).length) return <EmptyHistory />;

        const requestsList: Array<ReactElement> = [];
        let requestIndex = 1;

        const nextElem: () => number = (): number => {
            requestIndex += 1
            return requestIndex;
        }

        for(const year in sortedRequests) {
            requestsList.push(<RequestYearList
                        year={year}
                        requests={sortedRequests[year]}
                        key={year}
                        nextElem={nextElem}
                        handleRequestClick={handleRequestClick} />);
        }

        return requestsList;
    }

    function createReqDetailsPopup(): ReactElement | undefined {
        if(!reqDetails) return;
        return(
            <div className='popup'>
                <RequestDetails
                    reqDetails={reqDetails}
                    setReqDetails={setReqDetails}
                    setReqEdit={setReqEdit} />
            </div>
        )
    }

    function createReqEditPopup(): ReactElement | undefined {
        if(!reqEdit) return;
        
        return(
            <div className='popup'>
                <RequestEdit
                    reqEdit={reqEdit}
                    setReqEdit={setReqEdit} />
            </div>
        );
    }

    return(
        <div className='requests'>
            <h2 className='requests__title'>My Leave Requests</h2>

            {createReqList()}
            
            {createReqDetailsPopup()}

            {createReqEditPopup()}
        </div>
    );
};

export default Requests;