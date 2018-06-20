// import Toast from 'react-native-root-toast';
import { concat } from 'lodash';

import { createSet } from '../reduxSets';

const initialState = [];

const set = createSet(
  {
    ADD_TOASTS: (state, action) => concat([], state, action.payload),
    SET_TOASTS: (state, action) => action.payload,
    CLEAR_TOASTS: (state, action) => initialState,
    UNSHIFT_TOASTS: (state, action) => state.slice(1),
  },
  initialState
);

export default set;
