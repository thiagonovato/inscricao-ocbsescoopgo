import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
};

export default function subscription(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@subscription/SUBSCRIPTION_REQUEST': {
        break;
      }
      default:
    }
  });
}
