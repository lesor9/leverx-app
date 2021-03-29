import * as React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux'

import EmptyHistory from './EmptyHistory';
import RequestYearList from './RequestYearList';
import RequestDetails from './RequestDetails';
import RequestEdit from './RequestEdit';

import { sortDates, devideToYears } from '../../../helpers/dates';

import './styles.scss';

export default function Requests ()  {
    const [reqDetails, setReqDetails] = useState(false);
    const [reqEdit, setReqEdit] = useState(false);

    const requests = useSelector((state: any) => state);
    requests.sort(sortDates);
    const sortedRequests = requests.reduce(devideToYears, {});

    function handleRequestClick(e: any) {
        const clickedRequest = e.target.closest('.request-year-list__item');
        const { created } = clickedRequest.dataset;
        const clickedReqData = requests.find((req: any) => req.created === Number(created));

        setReqDetails(clickedReqData);
    }

    function createReqList() {
        if(!Object.entries(sortedRequests).length) return <EmptyHistory />;

        let list = [];
        let index = 1;

        const nextElem = () => {
            index += 1
            return index;
        }

        for(const year in sortedRequests) {
            list.push(<RequestYearList
                        year={year}
                        requests={sortedRequests[year]}
                        key={year}
                        nextElem={nextElem}
                        handleRequestClick={handleRequestClick} />);
        }

        return list;
    }

    function createReqDetailsPopup() {
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

    function createReqEditPopup() {
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