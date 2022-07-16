export interface AuthState {
  email: string;
  fullName: string;
  role: {
    name: string;
    slug: string;
  };
  token: string;
  user_id: string;
  isAuthorization: boolean;
}

export interface AuthData {
  email: string;
  password: string;
}

export enum AuthActionTypes {
  FETCH_AUTHORIZATION = 'FETCH_AUTHORIZATION',
  FETCH_AUTHORIZATION_ERROR = 'FETCH_AUTHORIZATION_ERROR',
  FETCH_AUTHORIZATION_LOGOUT = 'FETCH_AUTHORIZATION_LOGOUT',
}

interface FetchAuthorizationAction {
  type: AuthActionTypes.FETCH_AUTHORIZATION;
  payload: {
    fullName: string;
    email: string;
    token: string;
  };
}
interface FetchAuthorizationErrorAction {
  type: AuthActionTypes.FETCH_AUTHORIZATION_ERROR;
  payload: string;
}
interface FetchAuthorizationLogoutAction {
  type: AuthActionTypes.FETCH_AUTHORIZATION_LOGOUT;
  payload: {
    fullName: string;
    email: string;
    token: string;
  };
}

export type AuthAction =
  | FetchAuthorizationAction
  | FetchAuthorizationErrorAction
  | FetchAuthorizationLogoutAction;
