import axios from "axios";
import { SignUpFormType } from "../types";

const useRegisterUser = async (registrationPayload: SignUpFormType) => {
  return await axios
    .post(`${import.meta.env.VITE_ENDPOINT_ADDR}/users/register`, {
      ...registrationPayload,
    })
    .then(async (response) => {
      return response.data;
    })
    .catch(async (error) => {
      throw new Error(await error);
    });
};

export default useRegisterUser;
