import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { createClaimReducer } from './createClaim';
import { registrationReducer } from './registrationReducer';

export const rootReducer = combineReducers({
  registration: registrationReducer,
  auth: authReducer,
  createClaim: createClaimReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
