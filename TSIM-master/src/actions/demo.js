export const actionType = {

  registerSuccess: "USERS_REGISTER_SUCCESS",

};

export function registerSuccess(bool) {
  return { type: actionType.registerSuccess, bool };
}

