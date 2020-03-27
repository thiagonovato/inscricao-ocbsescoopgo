export function getNoticiasRequest() {
  return {
    type: "@noticias/GET_NOTICIAS_REQUEST"
  };
}

export function getNoticiasSuccess(noticias) {
  return {
    type: "@noticias/GET_NOTICIAS_SUCCESS",
    payload: { noticias }
  };
}

export function getNoticiasFailure() {
  return {
    type: "@noticias/GET_NOTICIAS_FAILURE"
  };
}
