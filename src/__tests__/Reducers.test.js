import rootSet from '../redux/rootSet';

const { types, reducers } = rootSet;

describe('companies reducer', () => {
  it(`${types.ADD_COMPANIES} reduces correctly`, () => {
    const payload = [{ foo: 'bar' }];
    const store = reducers({}, { type: types.ADD_COMPANIES, payload });
    expect(store.companies.data).toEqual(payload);
  });

  it(`${types.SET_COMPANIES} reduces correctly`, () => {
    const payload = [{ foo: 'bar' }];
    const store = reducers({}, { type: types.SET_COMPANIES, payload });
    expect(store.companies.data).toEqual(payload);
  });

  it(`${types.FETCH_REQUEST_COMPANIES} reduces correctly`, () => {
    const payload = {
      data: {},
      state: {
        loading: true,
        error: false,
        success: false,
        loaded: false,
      },
    };
    const store = reducers({}, { type: types.FETCH_REQUEST_COMPANIES });
    expect(store.companies).toEqual(payload);
  });

  it(`${types.FETCH_FAILURE_COMPANIES} reduces correctly`, () => {
    const payload = {
      data: {},
      state: {
        loading: false,
        error: true,
        success: false,
        loaded: true,
        message: 'foobar',
      },
    };
    const store = reducers(
      {},
      {
        type: types.FETCH_FAILURE_COMPANIES,
        payload: payload.state.message,
      }
    );
    expect(store.companies).toEqual(payload);
  });

  it(`${types.FETCH_SUCCESS_COMPANIES} reduces correctly`, () => {
    const payload = {
      data: {},
      state: {
        loading: false,
        error: false,
        success: true,
        loaded: true,
      },
    };
    const store = reducers({}, { type: types.FETCH_SUCCESS_COMPANIES });
    expect(store.companies).toEqual(payload);
  });
});

describe('discover reducer', () => {
  it(`${types.ADD_DISCOVER} reduces correctly`, () => {
    const payload = [{ foo: 'bar' }];
    const store = reducers({}, { type: types.ADD_DISCOVER, payload });
    expect(store.discover.data).toEqual(payload);
  });

  it(`${types.SET_DISCOVER} reduces correctly`, () => {
    const payload = [{ foo: 'bar' }];
    const store = reducers({}, { type: types.SET_DISCOVER, payload });
    expect(store.discover.data).toEqual(payload);
  });

  it(`${types.FETCH_REQUEST_DISCOVER} reduces correctly`, () => {
    const payload = {
      data: {},
      state: {
        loading: true,
        error: false,
        success: false,
        loaded: false,
      },
    };
    const store = reducers({}, { type: types.FETCH_REQUEST_DISCOVER });
    expect(store.discover).toEqual(payload);
  });

  it(`${types.FETCH_FAILURE_DISCOVER} reduces correctly`, () => {
    const payload = {
      data: {},
      state: {
        loading: false,
        error: true,
        success: false,
        loaded: true,
        message: 'foobar',
      },
    };
    const store = reducers(
      {},
      {
        type: types.FETCH_FAILURE_DISCOVER,
        payload: payload.state.message,
      }
    );
    expect(store.discover).toEqual(payload);
  });

  it(`${types.FETCH_SUCCESS_DISCOVER} reduces correctly`, () => {
    const payload = {
      data: {},
      state: {
        loading: false,
        error: false,
        success: true,
        loaded: true,
      },
    };
    const store = reducers({}, { type: types.FETCH_SUCCESS_DISCOVER });
    expect(store.discover).toEqual(payload);
  });
});

describe('companyDetail reducer', () => {
  it(`${types.ADD_COMPANY_DETAIL} reduces correctly`, () => {
    const payload = [{ foo: 'bar' }];
    const store = reducers({}, { type: types.ADD_COMPANY_DETAIL, payload });
    expect(store.companyDetail.data).toEqual(payload);
  });

  it(`${types.SET_COMPANY_DETAIL} reduces correctly`, () => {
    const payload = [{ foo: 'bar' }];
    const store = reducers({}, { type: types.SET_COMPANY_DETAIL, payload });
    expect(store.companyDetail.data).toEqual(payload);
  });

  it(`${types.FETCH_REQUEST_COMPANY_DETAIL} reduces correctly`, () => {
    const payload = {
      data: {},
      state: {
        loading: true,
        error: false,
        success: false,
        loaded: false,
      },
    };
    const store = reducers({}, { type: types.FETCH_REQUEST_COMPANY_DETAIL });
    expect(store.companyDetail).toEqual(payload);
  });

  it(`${types.FETCH_FAILURE_COMPANY_DETAIL} reduces correctly`, () => {
    const payload = {
      data: {},
      state: {
        loading: false,
        error: true,
        success: false,
        loaded: true,
        message: 'foobar',
      },
    };
    const store = reducers(
      {},
      {
        type: types.FETCH_FAILURE_COMPANY_DETAIL,
        payload: payload.state.message,
      }
    );
    expect(store.companyDetail).toEqual(payload);
  });

  it(`${types.FETCH_SUCCESS_COMPANY_DETAIL} reduces correctly`, () => {
    const payload = {
      data: {},
      state: {
        loading: false,
        error: false,
        success: true,
        loaded: true,
      },
    };
    const store = reducers({}, { type: types.FETCH_SUCCESS_COMPANY_DETAIL });
    expect(store.companyDetail).toEqual(payload);
  });
});
