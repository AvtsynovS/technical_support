import {
  GetClaimsAction,
  GetClaimsActionTypes,
  getClaimsState,
} from './../../types/getClaims';

const TOKEN = 'token';

const initialState: getClaimsState = {
  claims: [],
  totalItems: 0,
  errorClaim: null,
};

export const getClaimsReducer = (
  state = initialState,
  action: GetClaimsAction
) => {
  switch (action.type) {
    case GetClaimsActionTypes.FETCH_GET_CLAIMS:
      localStorage.getItem(TOKEN);
      return {
        ...state,
        claims: action.payload.claims,
        totalItems: action.payload.totalItems,
      };
    case GetClaimsActionTypes.FETCH_GET_CLAIMS_ERROR:
      return {
        ...state,
        errorClaim: action.payload,
      };
    default:
      return state;
  }
};
