export interface IRequest {
    comment: string,
    created: number,
    daysBetween: number,
    endDate: Date,
    startDate: Date,
    type: string,
}

export interface IRequestAction {
    type: string,
    payload?: IRequest,
}

export interface IDaysAction {
    type: string,
    payload?: number,
}