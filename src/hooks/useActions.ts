import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserActionCreators from '../store/action-creators/user';

// action-creator может быть много
// данный хук позволяет избавиться от постоянного написания dispatch в компонентах
// так же решается ошибка типизации

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(UserActionCreators, dispatch);
};
