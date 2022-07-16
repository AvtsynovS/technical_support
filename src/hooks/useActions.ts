import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as RegistrationActionCreators from '../store/ActionCreators/registration';
import * as authActionCreators from '../store/ActionCreators/auth';

export const useActions = () => {
  const dispatch = useDispatch();
  const actions = bindActionCreators(
    {
      ...RegistrationActionCreators,
      ...authActionCreators,
    },
    dispatch
  );
  return actions;
};
