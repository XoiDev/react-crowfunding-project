const { default: axios } = require("axios");

export const requesAuthRegister = (data) => {
  return axios.post("/auth/register", {
    ...data,
  });
};
