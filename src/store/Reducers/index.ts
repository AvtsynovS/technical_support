import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { createClaimReducer } from './createClaim';
import { getClaimsReducer } from './getClaims';
import { registrationReducer } from './registrationReducer';
import { getRolesReducer } from './getRoles';

export const rootReducer = combineReducers({
  registration: registrationReducer,
  auth: authReducer,
  createClaim: createClaimReducer,
  getClaims: getClaimsReducer,
  getRoles: getRolesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
