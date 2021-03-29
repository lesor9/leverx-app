import * as React from 'react';

import { useSelector } from 'react-redux'

import EmptyHistory from './EmptyHistory';
import RequestYearList from './RequestYearList';

import { sortDates, devideToYears } from '../../../helpers/dates';

import './styles.scss';

export default function Requests ()  {
    const requests = useSelector((state: any) => state);
    requests.sort(sortDates);
    const sortedRequests = requests.reduce(devideToYears, {});

    console.log(sortedRequests);

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
                        nextElem={nextElem} />);
        }

        return list;
    }

    return(
        <div className='requests'>
            <h2 className='requests__title'>My Leave Requests</h2>

            {createReqList()}
        </div>
    );
};