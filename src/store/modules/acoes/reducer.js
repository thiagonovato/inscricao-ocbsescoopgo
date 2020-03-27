import produce from "immer";

const INITIAL_STATE = {
  acoes: [],
  loading: false
};

export default function acoes(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case "@acoes/GET_ACOES_REQUEST": {
        draft.loading = true;
        break;
      }
      case "@acoes/GET_ACOES_SUCCESS": {
        draft.acoes = action.payload.acoes;
        draft.loading = false;
        break;
      }
      case "@acoes/GET_ACOES_FAILURE": {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
