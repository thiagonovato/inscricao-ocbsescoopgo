export function getAcoesRequest() {
  return {
    type: "@acoes/GET_ACOES_REQUEST"
  };
}

export function getAcoesSuccess(acoes) {
  return {
    type: "@acoes/GET_ACOES_SUCCESS",
    payload: { acoes }
  };
}

export function getAcoesFailure() {
  return {
    type: "@acoes/GET_ACOES_FAILURE"
  };
}
