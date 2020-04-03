import { Types } from '../actions/posts';

const INITIAL_STATE = {
  items: [],
  errorMessage: '',
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action

  switch (type) {
    case Types.CREATE_POST_SUCCESS:
      return { ...state, items: [...items, payload.items] };
    case Types.POST_ERROR:
      return { ...state, errorMessage: payload.errorMessage };
    default:
      return state;
  }
};