import { MILLISECONDS_IN_DAY, INCLUSIVE_DAY } from '../constants';

export function sortDates (a: any, b: any) {
    if (a.startDate > b.startDate) {
      return 1;
    }
    if (a.startDate < b.startDate) {
      return -1;
    }
    return 0;
};

export function devideToYears (accumalator: any, value: any) {
    const year = new Date(value.startDate).getFullYear();
    if(!accumalator[`${year}`]) accumalator[`${year}`] = [];
     accumalator[`${year}`].push(value);
  
    return accumalator;
}

export function countDaysBetween (startDate: any, endDate: any) {
  const daysBetweenDates = (endDate.getTime() - startDate.getTime()) / MILLISECONDS_IN_DAY;
  return Math.ceil(daysBetweenDates) + INCLUSIVE_DAY;
}