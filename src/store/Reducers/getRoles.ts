import {
  GetRolesAction,
  GetRolesActionTypes,
  getRolesState,
} from './../../types/getRoles';

const TOKEN = 'token';

const initialState: getRolesState = {
  type: {
    name: '',
    slug: '',
  },
  status: {
    name: '',
    slug: '',
  },
  errorRoles: null,
};
export const getRolesReducer = (
  state = initialState,
  action: GetRolesAction
) => {
  switch (action.type) {
    case GetRolesActionTypes.FETCH_GET_ROLES:
      localStorage.getItem(TOKEN);
      return {
        ...state,
        type: {
          name: action.payload.type.name,
          slug: action.payload.type.slug,
        },
        status: {
          name: action.payload.status.name,
          slug: action.payload.status.slug,
        },
      };

    case GetRolesActionTypes.FETCH_GET_ROLES_ERROR:
      return {
        ...state,
        errorRoles: action.payload,
      };
    default:
      return state;
  }
};
