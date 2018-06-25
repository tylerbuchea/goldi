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

const companies = createSet(
  {
    ADD_COMPANIES: (state, action) =>
      merge({}, state, { data: action.payload }),
    SET_COMPANIES: (state, action) => ({
      state: state.state,
      data: action.payload,
    }),
    CLEAR_COMPANIES: (state, action) => initialState,
    FETCH_REQUEST_COMPANIES: (state, action) => ({
      ...state,
      state: {
        loading: true,
        error: false,
        success: false,
        loaded: false,
      },
    }),
    FETCH_FAILURE_COMPANIES: (state, action) => ({
      ...state,
      state: {
        loading: false,
        error: true,
        success: false,
        loaded: true,
        message: action.payload,
      },
    }),
    FETCH_SUCCESS_COMPANIES: (state, action) => ({
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

companies.actions.asyncFetchCompanies = () => async dispatch => {
  dispatch(companies.actions.fetchRequestCompanies());

  const url = `/api/v1/company`;
  const [error1, response] = await to(fetch(url));
  if (error1) {
    return dispatch(companies.actions.fetchFailureCompanies(error1));
  }

  const [error2, responseBody] = await to(response.json());
  if (error2) {
    return dispatch(companies.actions.fetchFailureCompanies(error2));
  }
  if (!response.ok) {
    return dispatch(companies.actions.fetchFailureCompanies(responseBody));
  }

  const goodCompanies = responseBody.results.filter(
    company =>
      company.video_still &&
      company.video_id &&
      company.is_visible &&
      company.is_active
  );
  responseBody.results = goodCompanies;
  dispatch(companies.actions.fetchSuccessCompanies());
  return dispatch(companies.actions.setCompanies(responseBody));
};

export default companies;
