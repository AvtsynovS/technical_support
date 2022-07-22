import { Dispatch } from 'redux';
import axios from './../../utils/API';
import {
  CreateClaimAction,
  CreateClaimActionTypes,
  createClaimData,
  createClaimState,
} from '../../types/createClaim';

export const createClaim = (data: createClaimData) => {
  return async (dispatch: Dispatch<CreateClaimAction>) => {
    await axios
      .post<createClaimState>('claim', data)
      .then((response) => {
        dispatch({
          type: CreateClaimActionTypes.FETCH_CREATE_CLAIM,
          payload: {
            title: data.title,
            createdAt: response.data.createdAt,
            type: {
              name: data.type,
              slug: response.data.type.slug,
            },
            status: {
              name: response.data.status.name,
              slug: response.data.status.slug,
            },
            description: data.description,
          },
        });
      })
      .catch((e) => {
        alert(e.response.data.message);
      });
  };
};
