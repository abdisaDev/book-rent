import axios from 'axios';

const useFetchUser = async () => {
  return await axios
    .get(`${import.meta.env.VITE_ENDPOINT_ADDR}/users`)
    .then(async (response) => {
      return response.data;
    })
    .catch(async (error) => {
      throw new Error(await error);
    });
};

export default useFetchUser;
