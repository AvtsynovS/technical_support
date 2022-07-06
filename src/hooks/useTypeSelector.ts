import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../store/Reducers';

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
