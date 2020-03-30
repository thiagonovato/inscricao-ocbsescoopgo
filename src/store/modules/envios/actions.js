export function setEnviosRequest(obj) {
  return {
    type: "@envios/SET_ENVIOS_REQUEST",
    payload: { obj }
  };
}

export function setEnviosSuccess() {
  return {
    type: "@envios/SET_ENVIOS_SUCCESS"
  };
}

export function setEnviosFailure() {
  return {
    type: "@envios/SET_ENVIOS_FAILURE"
  };
}
