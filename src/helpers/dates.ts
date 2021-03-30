import { MILLISECONDS_IN_DAY, INCLUSIVE_DAY } from '../constants';
import { IRequest } from '../reducers/types';
import { ISortedRequest } from '../components/Elements/Requests/types';

export function sortDates (a: IRequest, b: IRequest): number {
    if (a.startDate > b.startDate) {
      return 1;
    }
    if (a.startDate < b.startDate) {
      return -1;
    }
    return 0;
}

export function devideToYears (accumalator: ISortedRequest, req: IRequest): ISortedRequest {
    const year: number = new Date(req.startDate).getFullYear();
    if(!accumalator[year]) accumalator[year] = [];
     accumalator[year].push(req);
  
    return accumalator;
}

export function countDaysBetween (startDate: Date, endDate: Date): number {
  const daysBetweenDates: number = (endDate.getTime() - startDate.getTime()) / MILLISECONDS_IN_DAY;
  return Math.round(daysBetweenDates) + INCLUSIVE_DAY;
}