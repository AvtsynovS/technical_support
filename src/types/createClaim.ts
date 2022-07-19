export interface createClaimState {
  title: string;
  type: {
    name: string;
    slug: string;
  };
  status: {
    name: string;
    slug: string;
  };
  createdAt: string;
  description: string;
  errorClaim: null | string;
}

export interface createClaimData {
  title: string;
  type: string;
  description: string;
  status: string;
}

export enum CreateClaimActionTypes {
  FETCH_CREATE_CLAIM = 'FETCH_CREATE_CLAIM',
  FETCH_CREATE_CLAIM_ERROR = 'FETCH_CREATE_CLAIM_ERROR',
}

interface FetchCreateClaimAction {
  type: CreateClaimActionTypes.FETCH_CREATE_CLAIM;
  payload: {
    title: string;
    createdAt: string;
    type: {
      name: string;
      slug: string;
    };
    status: {
      name: string;
      slug: string;
    };
    description: string;
  };
}
interface FetchCreateClaimErrorAction {
  type: CreateClaimActionTypes.FETCH_CREATE_CLAIM_ERROR;
  payload: string;
}

export type CreateClaimAction =
  | FetchCreateClaimAction
  | FetchCreateClaimErrorAction;
