import { camelCase, merge } from 'lodash';

/**
 * Create Set
 * @param {*} reducerCases
 * @param {*} initialState
 */
export function createSet(reducerCases, initialState = {}) {
  const typesArray = Object.keys(reducerCases);
  const { actions, types } = typesArray.reduce((accumulator, type) => {
    const types = createType(type);
    const actions = createAction(type);
    return merge(accumulator, { types, actions });
  }, {});
  const reducers = createReducer(reducerCases, initialState);

  return { actions, types, reducers };
}

/**
 * Create Type
 * @param {*} type
 */
export function createType(type) {
  return { [type]: type };
}

/**
 * Create Action
 * @param {*} type
 */
export function createAction(type) {
  const name = camelCase(type);
  const mutateStore = (type, payload) => ({ type, payload });
  const action = { [name]: payload => mutateStore(type, payload) };
  return action;
}

/**
 * Create Reducer
 * @param {*} proto
 * @param {*} initialState
 */
export function createReducer(proto, initialState = {}) {
  function reducer(state = initialState, action) {
    return this[action.type] ? this[action.type](state, action) : state;
  }
  return reducer.bind(proto);
}

/**
 * Create Async Superset
 * @param {*} suffix 
 */
export function createAsyncSuperset(suffix) {
  const upper = suffix.toUpperCase();

  return {
    [`ASYNC_REQUEST_${upper}`]: (state, action) => ({
      ...state,
      state: {
        loading: true,
        error: false,
        success: false,
      }
    }),
    [`ASYNC_FAILURE_${upper}`]: (state, action) => ({
      ...state,
      state: {
        loading: false,
        error: true,
        success: false,
        message: action.payload,
      }
    }),
    [`ASYNC_SUCCESS_${upper}`]: (state, action) => ({
      ...state,
      state: {
        loading: false,
        error: false,
        success: true,
      }
    }),
  }
}