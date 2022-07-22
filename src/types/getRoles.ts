export interface getRolesState {
  type: {
    name: string;
    slug: string;
  };
  status: {
    name: string;
    slug: string;
  };
  errorRoles: null | string;
}

export enum GetRolesActionTypes {
  FETCH_GET_ROLES = 'FETCH_GET_ROLES',
  FETCH_GET_ROLES_ERROR = 'FETCH_GET_ROLES_ERROR',
}

interface FetchGetRolesAction {
  type: GetRolesActionTypes.FETCH_GET_ROLES;
  payload: {
    type: {
      name: string;
      slug: string;
    };
    status: {
      name: string;
      slug: string;
    };
  };
}
interface FetchGetRolesErrorAction {
  type: GetRolesActionTypes.FETCH_GET_ROLES_ERROR;
  payload: string;
}

export type GetRolesAction = FetchGetRolesAction | FetchGetRolesErrorAction;
