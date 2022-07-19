import {
  RegistrationAction,
  RegistrationActionTypes,
  RegistrationState,
} from '../../types/registration';

const initialState: RegistrationState = {
  fullName: '',
  email: '',
  password: '',
  errorRegistration: null,
};

export const registrationReducer = (
  state = initialState,
  action: RegistrationAction
): RegistrationState => {
  switch (action.type) {
    case RegistrationActionTypes.FETCH_REGISTRATION:
      return {
        ...state,
        fullName: action.payload.fullName,
        email: action.payload.email,
        password: action.payload.password,
      };
    case RegistrationActionTypes.FETCH_REGISTRATION_ERROR:
      return {
        ...state,
        fullName: '',
        email: '',
        password: '',
        errorRegistration: action.payload,
      };
    default:
      return state;
  }
};
