const initialState = {
  companies: {
    data: [],
    state: { loading: false, error: false, success: false },
  },
  discover: {
    data: [],
    state: { loading: false, error: false, success: false },
  },
  companyDetail: {
    data: {},
    state: { loading: false, error: false, success: false },
  },
};

export default initialState;
