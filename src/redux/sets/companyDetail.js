import { merge } from 'lodash';
import { to } from 'await-to-js';

import { createSet } from '../reduxSets';

const initialState = {
  data: {},
  state: { loading: false, error: false, success: false },
};

const companyDetail = createSet(
  {
    ADD_COMPANY_DETAIL: (state, action) => merge({}, state, { data: action.payload }),
    SET_COMPANY_DETAIL: (state, action) => ({ state: state.state, data: action.payload }),
    CLEAR_COMPANY_DETAIL: (state, action) => initialState,
    FETCH_REQUEST_COMPANY_DETAIL: (state, action) => ({
      ...state,
      state: { loading: true, error: false, success: false }
    }),
    FETCH_FAILURE_COMPANY_DETAIL: (state, action) => ({
      ...state,
      state: { loading: true, error: false, success: false, message: action.payload }
    }),
    FETCH_SUCCESS_COMPANY_DETAIL: (state, action) => ({
      ...state,
      state: { loading: true, error: false, success: false }
    }),
  },
  initialState
);

companyDetail.actions.asyncFetchCompanyDetail = data => async dispatch => {
  dispatch(companyDetail.actions.fetchRequestCompanyDetail());

  const url = `/company/${data.id}`;
  const [error1, response] = await to(fetch(url));
  if (error1) return dispatch(companyDetail.actions.fetchFailureCompanyDetail(error1));

  const [error2, responseBody] = await to(response.json());
  if (error2) return dispatch(companyDetail.actions.fetchFailureCompanyDetail(error2));

  dispatch(companyDetail.actions.fetchSuccessCompanyDetail());
  dispatch(companyDetail.actions.setCompanyDetail(responseBody));
};

export default companyDetail;
