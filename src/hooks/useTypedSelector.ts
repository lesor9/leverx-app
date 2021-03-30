import { useSelector, TypedUseSelectorHook } from 'react-redux'; 
import { RootReducer } from '../reducers/rootReducer';

export const useTypedSelector: TypedUseSelectorHook<RootReducer> = useSelector;