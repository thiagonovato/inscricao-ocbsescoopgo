import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
};

export default function subscription(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@subscription/SUBSCRIPTION_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@subscription/SUBSCRIPTION_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@subscription/SUBSCRIPTION_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
