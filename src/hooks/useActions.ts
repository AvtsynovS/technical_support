import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as RegistrationActionCreators from '../store/ActionCreators/registration';

export const useActions = () => {
  const dispatch = useDispatch();
  const actions = bindActionCreators(
    {
      ...RegistrationActionCreators,
    },
    dispatch
  );
  return actions;
};
