import produce from "immer";

const INITIAL_STATE = {
  loading: false
};

export default function envios(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case "@envios/SET_ENVIOS_REQUEST": {
        draft.loading = true;
        break;
      }
      case "@envios/SET_ENVIOS_SUCCESS": {
        draft.loading = false;
        break;
      }
      case "@envios/SET_ENVIOS_FAILURE": {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
