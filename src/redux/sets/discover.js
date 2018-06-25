import { merge } from 'lodash';
import { to } from 'await-to-js';

import { createSet } from '../reduxSets';

const initialState = {
  data: {},
  state: {
    loading: false,
    error: false,
    success: false,
    loaded: false,
  },
};

const discover = createSet(
  {
    ADD_DISCOVER: (state, action) => merge({}, state, { data: action.payload }),
    SET_DISCOVER: (state, action) => ({
      state: state.state,
      data: action.payload,
    }),
    CLEAR_DISCOVER: (state, action) => initialState,
    FETCH_REQUEST_DISCOVER: (state, action) => ({
      ...state,
      state: {
        loading: true,
        error: false,
        success: false,
        loaded: false,
      },
    }),
    FETCH_FAILURE_DISCOVER: (state, action) => ({
      ...state,
      state: {
        loading: false,
        error: true,
        success: false,
        loaded: true,
        message: action.payload,
      },
    }),
    FETCH_SUCCESS_DISCOVER: (state, action) => ({
      ...state,
      state: {
        loading: false,
        error: false,
        success: true,
        loaded: true,
      },
    }),
  },
  initialState
);

discover.actions.asyncFetchDiscover = data => async dispatch => {
  dispatch(discover.actions.fetchRequestDiscover());

  const url = `/api/v1/discover`;
  const [error1, response] = await to(fetch(url));
  if (error1) {
    return dispatch(discover.actions.fetchFailureDiscover(error1));
  }

  const [error2, responseBody] = await to(response.json());
  if (error2) {
    return dispatch(discover.actions.fetchFailureDiscover(error2));
  }
  if (!response.ok) {
    return dispatch(discover.actions.fetchFailureDiscover(responseBody));
  }

  const goodCompanies = responseBody.results.filter(company => company.image);
  responseBody.results = goodCompanies;

  dispatch(discover.actions.fetchSuccessDiscover());
  dispatch(discover.actions.setDiscover(responseBody));
};

export default discover;
