import { combineReducers } from 'redux';
import { merge } from 'lodash';

import companies from './sets/companies';
import discover from './sets/discover';
import companyDetail from './sets/companyDetail';
import toasts from './sets/toasts';
import lockup from './sets/lockup';

const sets = {
  companies,
  companyDetail,
  discover,
  toasts,
  lockup,
};

const { types, actions, reducers } = Object
  .keys(sets)
  .reduce((accumulator, key) => {
    const { types, actions, reducers } = sets[key];

    return merge(accumulator, {
      types,
      actions,
      reducers: { [key]: reducers },
    });
  }, {});

const rootSet = {
  types,
  actions,
  reducers: combineReducers(reducers),
};

export default rootSet;