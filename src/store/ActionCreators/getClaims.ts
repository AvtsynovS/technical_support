import { Dispatch } from 'redux';
import axios from './../../utils/API';
import {
  GetClaimsAction,
  getClaimsState,
  GetClaimsActionTypes,
} from '../../types/getClaims';
export const getClaims = (offset = 0, limit = 10) => {
  return async (dispatch: Dispatch<GetClaimsAction>) => {
    await axios
      .get<getClaimsState>(`claim?${offset}&${limit}`, {
        params: {
          offset,
          limit,
        },
      })
      .then((response) => {
        console.log(response);
        dispatch({
          type: GetClaimsActionTypes.FETCH_GET_CLAIMS,
          payload: {
            claims: response.data.claims,
            totalItems: response.data.totalItems,
          },
        });
      })
      .catch((e) => {
        alert(e.response.data.message);
      });
  };
};
