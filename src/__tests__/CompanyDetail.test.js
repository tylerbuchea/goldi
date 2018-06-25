import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import fetch from 'isomorphic-fetch';

import TestComponent from '../routes/CompanyDetail';
import initialState from '../redux/initialState';
import fixtures from '../redux/fixtures';
import createStore from '../redux/store.js';

const store = createStore({
  ...initialState,
  companyDetail: {
    state: {
      loading: false,
      error: false,
      success: true,
      loaded: true,
    },
    data: fixtures.companyDetail,
  },
});

// console.log(store.getState());
const TestComponentProvider = () => (
  <Provider store={store}>
    <TestComponent match={{ params: { id: 4 } }} />
  </Provider>
);

it('renders correctly with snapshot', () => {
  const tree = renderer.create(<TestComponentProvider />).toJSON();
  expect(tree).toMatchSnapshot();
});
