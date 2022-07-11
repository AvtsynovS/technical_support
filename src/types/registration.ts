export interface RegistrationState {
  fullName: string;
  email: string;
  password: string;
  errorRegistration?: null | string;
}

export enum RegistrationActionTypes {
  FETCH_REGISTRATION = 'FETCH_REGISTRATION',
  FETCH_REGISTRATION_ERROR = 'FETCH_REGISTRATION_ERROR',
}

interface FetchRegistrationAction {
  type: RegistrationActionTypes.FETCH_REGISTRATION;
  payload: {
    fullName: string;
    email: string;
    password: string;
  };
}
interface FetchRegistrationErrorAction {
  type: RegistrationActionTypes.FETCH_REGISTRATION_ERROR;
  payload: string;
}

export type RegistrationAction =
  | FetchRegistrationAction
  | FetchRegistrationErrorAction;
