import {
  CreateClaimAction,
  CreateClaimActionTypes,
  createClaimState,
} from '../../types/createClaim';

const TOKEN = 'token';

const initialState: createClaimState[] = [
  {
    title: '',
    type: {
      name: '',
      slug: '',
    },
    status: {
      name: '',
      slug: '',
    },
    createdAt: '',
    description: '',
    errorClaim: null,
  },
];

export const createClaimReducer = (
  state = initialState,
  action: CreateClaimAction
) => {
  switch (action.type) {
    case CreateClaimActionTypes.FETCH_CREATE_CLAIM:
      localStorage.getItem(TOKEN);
      return {
        ...state,
        title: action.payload.title,
        type: {
          name: action.payload.type.name,
          slug: action.payload.type.slug,
        },
        status: {
          name: action.payload.status.name,
          slug: action.payload.status.slug,
        },
        createdAt: action.payload.createdAt,
        description: action.payload.description,
      };

    case CreateClaimActionTypes.FETCH_CREATE_CLAIM_ERROR:
      return {
        ...state,
        errorClaim: action.payload,
      };
    default:
      return state;
  }
};
