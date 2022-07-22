import { Dispatch } from 'redux';
import axios from './../../utils/API';
import {
  GetRolesAction,
  GetRolesActionTypes,
  getRolesState,
} from '../../types/getRoles';

export const getRoles = () => {
  return async (dispatch: Dispatch<GetRolesAction>) => {
    await axios
      .get<getRolesState>('roles')
      .then((response) => {
        dispatch({
          type: GetRolesActionTypes.FETCH_GET_ROLES,
          payload: {
            type: {
              name: response.data.type.name,
              slug: response.data.type.slug,
            },
            status: {
              name: response.data.status.name,
              slug: response.data.status.slug,
            },
          },
        });
      })
      .catch((e) => {
        alert(e.response.data.message);
      });
  };
};
