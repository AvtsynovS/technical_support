import { claim } from './claims';

export interface getClaimsState {
  claims: claim[];
  totalItems: number;
  errorClaim: null | string;
}

export enum GetClaimsActionTypes {
  FETCH_GET_CLAIMS = 'FETCH_GET_CLAIMS',
  FETCH_GET_CLAIMS_ERROR = 'FETCH_GET_CLAIMS_ERROR',
}

interface FetchGetClaimsAction {
  type: GetClaimsActionTypes.FETCH_GET_CLAIMS;
  payload: {
    claims: claim[];
    totalItems: number;
  };
}

interface FetchGetClaimsErrorAction {
  type: GetClaimsActionTypes.FETCH_GET_CLAIMS_ERROR;
  payload: string;
}

export type GetClaimsAction = FetchGetClaimsAction | FetchGetClaimsErrorAction;
