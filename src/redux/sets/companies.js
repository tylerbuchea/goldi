import { merge } from 'lodash';
import { to } from 'await-to-js';

import { createSet } from '../reduxSets';

const initialState = {
  data: {},
  state: { loading: false, error: false, success: false },
};

const companies = createSet(
  {
    ADD_COMPANIES: (state, action) => merge({}, state, { data: action.payload }),
    SET_COMPANIES: (state, action) => ({ state: state.state, data: action.payload }),
    CLEAR_COMPANIES: (state, action) => initialState,
    FETCH_REQUEST_COMPANIES: (state, action) => ({
      ...state,
      state: { loading: true, error: false, success: false }
    }),
    FETCH_FAILURE_COMPANIES: (state, action) => ({
      ...state,
      state: { loading: false, error: true, success: false, message: action.payload }
    }),
    FETCH_SUCCESS_COMPANIES: (state, action) => ({
      ...state,
      state: { loading: false, error: false, success: true }
    }),
  },
  initialState
);

companies.actions.asyncFetchCompanies = data => async dispatch => {
  dispatch(companies.actions.fetchRequestCompanies());

  const url = `/company`;
  const [error1, response] = await to(fetch(url));
  if (error1) return dispatch(companies.actions.fetchFailureCompanies(error1));

  const [error2, responseBody] = await to(response.json());
  if (error2) return dispatch(companies.actions.fetchFailureCompanies(error2));
  console.log(responseBody);

  dispatch(companies.actions.fetchSuccessCompanies());
  dispatch(companies.actions.setCompanies(responseBody));
};

export default companies;
