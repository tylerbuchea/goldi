import { merge } from 'lodash';
import { to } from 'await-to-js';

import { createSet } from '../reduxSets';

const initialState = {
  data: {},
  state: { loading: false, error: false, success: false },
};

const discover = createSet(
  {
    ADD_DISCOVER: (state, action) => merge({}, state, { data: action.payload }),
    SET_DISCOVER: (state, action) => ({ state: state.state, data: action.payload }),
    CLEAR_DISCOVER: (state, action) => initialState,
    FETCH_REQUEST_DISCOVER: (state, action) => ({
      ...state,
      state: { loading: true, error: false, success: false }
    }),
    FETCH_FAILURE_DISCOVER: (state, action) => ({
      ...state,
      state: { loading: true, error: false, success: false, message: action.payload }
    }),
    FETCH_SUCCESS_DISCOVER: (state, action) => ({
      ...state,
      state: { loading: true, error: false, success: false }
    }),
  },
  initialState
);

discover.actions.asyncFetchDiscover = data => async dispatch => {
  dispatch(discover.actions.fetchRequestDiscover());

  const url = `/discover`;
  const [error1, response] = await to(fetch(url));
  if (error1) return dispatch(discover.actions.fetchFailureDiscover(error1));

  const [error2, responseBody] = await to(response.json());
  if (error2) return dispatch(discover.actions.fetchFailureDiscover(error2));

  dispatch(discover.actions.fetchSuccessDiscover());
  dispatch(discover.actions.setDiscover(responseBody));
  return;
};

export default discover;
