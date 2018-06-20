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

const mutatedSets = Object
  .keys(sets)
  .reduce((accumulator, key) => {
    const { types, actions } = sets[key];

    return merge(accumulator, {
      types,
      actions,
      reducers: { [key]: sets[key].reducers },
    });
  }, {});

const rootSet = {
  types: mutatedSets.types,
  actions: mutatedSets.actions,
  reducers: combineReducers(mutatedSets.reducers),
};

export default rootSet;