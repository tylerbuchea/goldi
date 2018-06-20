import { createSet } from '../reduxSets';

const initialState = '';

const lockup = createSet(
  {
    ADD_LOCKUP: (state, action) => state + action.payload,
    SET_LOCKUP: (state, action) => action.payload,
    CLEAR_LOCKUP: (state, action) => initialState,
  },
  initialState
);

export default lockup;
