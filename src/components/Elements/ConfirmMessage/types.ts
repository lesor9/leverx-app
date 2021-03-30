import { IReqDetailsInterface } from '../RequestForm/types'

export interface IConfirmMessageProps {
    redQuestion?: string,
    question?: string,
    whiteButton?: string,
    whiteButtonType?: string,
    blueButton?: string,
    blueButtonType?: string,
    reqDetails: IReqDetailsInterface,
}

export interface IRequestInlineShortProps {
    startDate: Date;
    endDate: Date;
    type: string;
}