import produce from "immer";

const INITIAL_STATE = {
  decretos: [],
  loading: false
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case "@decretos/GET_DECRETOS_REQUEST": {
        draft.loading = true;
        break;
      }
      case "@decretos/GET_DECRETOS_SUCCESS": {
        draft.decretos = action.payload.decretos;
        draft.loading = false;
        break;
      }
      case "@decretos/GET_DECRETOS_FAILURE": {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
