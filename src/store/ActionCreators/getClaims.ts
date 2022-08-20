import { Dispatch } from 'redux';
import axios from './../../utils/API';
import {
  GetClaimsAction,
  getClaimsState,
  GetClaimsActionTypes,
} from '../../types/getClaims';

export const getClaims = () => {
  return async (dispatch: Dispatch<GetClaimsAction>) => {
    await axios
      .get<getClaimsState>('claim')
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
