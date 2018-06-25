import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock'; // You can use any testing library
import rootSet from '../redux/rootSet';

const { actions, types } = rootSet;
const mockStore = configureMockStore([thunk]);

describe('async actions companies', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('asyncFetchCompanies fires correct success actions', async () => {
    const body = {
      results: [
        {
          video_still: 'foobar',
          video_id: 'foobar',
          is_visible: 'foobar',
          is_active: 'foobar',
        },
      ],
    };
    fetchMock.mock('*', body);

    const expected = [
      { type: types.FETCH_REQUEST_COMPANIES },
      { type: types.FETCH_SUCCESS_COMPANIES },
      { type: types.SET_COMPANIES, payload: body },
    ];

    const store = mockStore();
    await store.dispatch(actions.asyncFetchCompanies());
    expect(store.getActions()).toEqual(expected);
  });
});

describe('async actions discover', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('asyncFetchDiscover fires correct success actions', async () => {
    const body = { results: [{ image: 'foobar' }] };
    fetchMock.mock('*', body);

    const expected = [
      { type: types.FETCH_REQUEST_DISCOVER },
      { type: types.FETCH_SUCCESS_DISCOVER },
      { type: types.SET_DISCOVER, payload: body },
    ];

    const store = mockStore();
    await store.dispatch(actions.asyncFetchDiscover());
    expect(store.getActions()).toEqual(expected);
  });
});

describe('async actions companyDetail', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('asyncFetchCompanyDetail fires correct success actions', async () => {
    const body = { foo: 'bar' };
    const payload = { id: 1 };
    fetchMock.mock('*', body);

    const expected = [
      { type: types.FETCH_REQUEST_COMPANY_DETAIL },
      { type: types.FETCH_SUCCESS_COMPANY_DETAIL },
      { type: types.SET_COMPANY_DETAIL, payload: body },
    ];

    const store = mockStore();
    await store.dispatch(actions.asyncFetchCompanyDetail(payload));
    expect(store.getActions()).toEqual(expected);
  });
});
