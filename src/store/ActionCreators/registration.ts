import { Dispatch } from 'redux';
import axios from './../../utils/API';
import {
  RegistrationAction,
  RegistrationActionTypes,
  RegistrationState,
} from '../../types/registration';

export const fetchRegistration = (data: RegistrationState) => {
  return async (dispatch: Dispatch<RegistrationAction>) => {
    await axios
      .post<RegistrationAction>('auth/registration', data)
      .then(() => {
        dispatch({
          type: RegistrationActionTypes.FETCH_REGISTRATION,
          payload: {
            fullName: data.fullName,
            email: data.email,
            password: data.password,
          },
        });
      })
      .catch((e) => {
        alert(e.response.data.message);
      });
  };
};
