import axios from "axios";

const useFetchUser = async () => {
  return await axios
    .get(`${import.meta.env.VITE_ENDPOINT_ADDR}/users`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
    .then(async (response) => {
      console.log(response);
      return response.data;
    })
    .catch(async (error) => {
      throw new Error(await error);
    });
};

export default useFetchUser;
