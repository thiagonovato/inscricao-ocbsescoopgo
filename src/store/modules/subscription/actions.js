export function subscriptionRequest(name, cpf, email, phone, cooperativa) {
  return {
    type: '@subscription/SUBSCRIPTION_REQUEST',
    payload: { name, cpf, email, phone, cooperativa },
  };
}

export function subscriptionSuccess() {
  return {
    type: '@subscription/SUBSCRIPTION_SUCCESS',
  };
}

export function subscriptionFailure() {
  return {
    type: '@subscription/SUBSCRIPTION_FAILURE',
  };
}
