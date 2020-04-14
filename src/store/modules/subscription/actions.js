export function subscriptionRequest(name, cpf, email, phone, cooperativa) {
  return {
    type: '@subscription/SUBSCRIPTION_REQUEST',
    payload: { name, cpf, email, phone, cooperativa },
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}
