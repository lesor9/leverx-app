export interface IDatesProps {
    type: string,
    startDate: Date,
    endDate: Date,
    setStartDate: React.Dispatch<React.SetStateAction<Date>>,
    setEndDate: React.Dispatch<React.SetStateAction<Date>>,
}

export interface IDaysProps {
    daysBetweenDates: number,
}

export interface IRequestFormInfo {
    type: string,
    startDate: Date,
    endDate: Date,
    selectDisabled? : boolean,
    comment: string,
    setStartDate: React.Dispatch<React.SetStateAction<Date>>,
    setEndDate: React.Dispatch<React.SetStateAction<Date>>,
    setComment: React.Dispatch<React.SetStateAction<string>>,
    handleTypeChange: (event: React.ChangeEvent<HTMLSelectElement>) => void,
}

export interface IReqDetailsInterface {
    type: string,
    startDate: Date,
    endDate: Date,
    hideMessage: React.Dispatch<React.SetStateAction<boolean>>,
    createRequest: () => void,
}

export interface IRequestProps {
    type: string;
}
