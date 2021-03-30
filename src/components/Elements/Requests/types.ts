import { IRequest } from '../../../reducers/types';

export interface ApptoverInfo {
    [stage: string]: Array<IApprover>,
}

export interface IApprovesProps {
    approves: ApptoverInfo,
}

export interface IApprover {
    name: string,
    comment?: string,
}

export interface ISortedRequest {
    [year: string]: Array<IRequest>
}

export interface IRequestYearListProps {
    year: string,
    requests: Array<IRequest>,
    nextElem: () => number,
    handleRequestClick: (event: React.MouseEvent<HTMLUListElement>) => void,
}

export interface IRequestDetailsProps {
    reqDetails: IRequest,
    setReqDetails: React.Dispatch<React.SetStateAction<IRequest | false>>,
    setReqEdit: React.Dispatch<React.SetStateAction<IRequest | false>>,
}

export interface IRequestEditProps {
    reqEdit: IRequest,
    setReqEdit: React.Dispatch<React.SetStateAction<IRequest | false>>,
}

export interface IRequestInlineProps {
    withArrow?: boolean,
    nextElem?: () => number,
    req: IRequest,
}