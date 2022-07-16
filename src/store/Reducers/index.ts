import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { registrationReducer } from './registrationReducer';

export const rootReducer = combineReducers({
  registration: registrationReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
