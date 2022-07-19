import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as RegistrationActionCreators from '../store/ActionCreators/registration';
import * as authActionCreators from '../store/ActionCreators/auth';
import * as createClaimActionCreators from '../store/ActionCreators/createClaim';

export const useActions = () => {
  const dispatch = useDispatch();
  const actions = bindActionCreators(
    {
      ...RegistrationActionCreators,
      ...authActionCreators,
      ...createClaimActionCreators,
    },
    dispatch
  );
  return actions;
};
