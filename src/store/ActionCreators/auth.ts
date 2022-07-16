import { Dispatch } from 'redux';
import axios from './../../utils/API';
import {
  AuthAction,
  AuthActionTypes,
  AuthData,
  AuthState,
} from '../../types/auth';
export const fetchAuthorization = (data: AuthData) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      await axios.post<AuthState>('auth/login', data).then((response) => {
        dispatch({
          type: AuthActionTypes.FETCH_AUTHORIZATION,
          payload: {
            email: data.email,
            fullName: response.data.fullName,
            token: response.data.token,
          },
        });
      });
    } catch (e) {
      dispatch({
        type: AuthActionTypes.FETCH_AUTHORIZATION_ERROR,
        payload: 'Произошла ошибка при авторизации пользователя',
      });
    }
  };
};

export const logout = () => {};
