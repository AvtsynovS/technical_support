import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as RegistrationActionCreators from '../store/ActionCreators/registration';
import * as authActionCreators from '../store/ActionCreators/auth';
import * as createClaimActionCreators from '../store/ActionCreators/createClaim';
import * as getRolesActionCreators from '../store/ActionCreators/getRoles';
import * as getClaimsActionCreators from '../store/ActionCreators/getClaims';

export const useActions = () => {
  const dispatch = useDispatch();
  const actions = bindActionCreators(
    {
      ...RegistrationActionCreators,
      ...authActionCreators,
      ...createClaimActionCreators,
      ...getRolesActionCreators,
      ...getClaimsActionCreators,
    },
    dispatch
  );
  return actions;
};
