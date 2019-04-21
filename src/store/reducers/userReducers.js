import { UPDATE_USER_STATE } from '../constant';

const initialState = {
  name: '',
  email: '',
  entries: 0,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_USER_STATE:
      return { ...state, ...payload };
    default:
      return state;
  }
};
