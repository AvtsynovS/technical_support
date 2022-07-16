import { AuthAction, AuthActionTypes, AuthState } from '../../types/auth';

const TOKEN = 'token';
const ACCESS_FULLNAME = 'fullName';

const initialState: AuthState = {
  email: '',
  fullName: localStorage.getItem(ACCESS_FULLNAME) ?? '',
  role: {
    name: '',
    slug: '',
  },
  token: localStorage.getItem(TOKEN) ?? '',
  user_id: '',
  isAuthorization: Boolean(localStorage.getItem(TOKEN)),
};

export const authReducer = (state = initialState, action: AuthAction) => {
  switch (action.type) {
    case AuthActionTypes.FETCH_AUTHORIZATION:
      localStorage.setItem(TOKEN, action.payload.token);
      localStorage.setItem(ACCESS_FULLNAME, action.payload.fullName);
      return {
        ...state,
        fullName: action.payload.fullName,
        email: action.payload.email,
        token: action.payload.token,
        isAuthorization: Boolean(action.payload.email),
      };
    case AuthActionTypes.FETCH_AUTHORIZATION_ERROR:
      return {
        errorAuthorization: action.payload,
      };
    case AuthActionTypes.FETCH_AUTHORIZATION_LOGOUT:
      localStorage.removeItem(TOKEN);
      localStorage.removeItem(ACCESS_FULLNAME);
      return {
        ...state,
        fullName: '',
        email: '',
        token: '',
        isAuthorization: false,
      };
    default:
      return state;
  }
};
