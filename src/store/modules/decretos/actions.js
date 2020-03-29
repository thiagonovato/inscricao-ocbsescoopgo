export function getDecretosRequest() {
  return {
    type: "@decretos/GET_DECRETOS_REQUEST"
  };
}

export function getDecretosSuccess(decretos) {
  return {
    type: "@decretos/GET_DECRETOS_SUCCESS",
    payload: { decretos }
  };
}

export function getDecretosFailure() {
  return {
    type: "@decretos/GET_DECRETOS_FAILURE"
  };
}
