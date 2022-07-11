import { combineReducers } from 'redux';
import { registrationReducer } from './registrationReducer';

export const rootReducer = combineReducers({
  registration: registrationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
