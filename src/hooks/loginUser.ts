import axios from "axios";
import { SignInFormType } from "../types";

const useLoginUser = async (loginPayload: SignInFormType) => {
  return await axios
    .post(`${import.meta.env.VITE_ENDPOINT_ADDR}/auth/login`, loginPayload)
    .then(async (response) => {
      console.log(response.data);
      localStorage.setItem("access_token", response.data.user.access_token);
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user.logged_user)
      );

      return response.data;
    })
    .catch(async (error) => {
      throw new Error(await error);
    });
};

export default useLoginUser;
