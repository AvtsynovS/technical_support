import { UserAction, UserActionTypes } from '../../types/user';
import { Dispatch } from 'redux';
import axios from 'axios';

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS });
      // запрос на сервер!!!
      const response = await axios.get('http://localhost:3001/user');
      dispatch({
        type: UserActionTypes.FETCH_USERS_SUCCESS,
        // payload - данные, которые получили в теле ответа от сервера
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: 'Произошла ошибка при загрузки пользователей',
      });
    }
  };
};
