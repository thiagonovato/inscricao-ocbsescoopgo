import produce from "immer";

const INITIAL_STATE = {
  noticias: [],
  loading: false
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case "@noticias/GET_NOTICIAS_REQUEST": {
        draft.loading = true;
        break;
      }
      case "@noticias/GET_NOTICIAS_SUCCESS": {
        draft.noticias = action.payload.noticias;
        draft.loading = false;
        break;
      }
      case "@noticias/GET_NOTICIAS_FAILURE": {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
