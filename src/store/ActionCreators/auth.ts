import { Dispatch } from 'redux';
import axios from './../../utils/API';
import {
  AuthAction,
  AuthActionTypes,
  LoginData,
  AuthState,
} from '../../types/auth';
export const login = (data: LoginData) => {
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

export const logout = () => {
  return (dispatch: Dispatch<AuthAction>) => {
    dispatch({
      type: AuthActionTypes.FETCH_AUTHORIZATION_LOGOUT,
      payload: {
        fullName: '',
        email: '',
        token: '',
      },
    });
  };
};
