import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserActionCreators from '../store/ActionCreator/user';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(UserActionCreators, dispatch);
};
