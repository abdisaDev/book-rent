import axios from "axios";

export const useUpdateOwnersStatus = async (ownerEmail: { email: string }) => {
  return await axios
    .post(`${import.meta.env.VITE_ENDPOINT_ADDR}/users/activate`, ownerEmail)
    .then(async (response) => {
      return response.data;
    })
    .catch(async (error) => {
      throw new Error(await error);
    });
};

export const useUpdateOwnersApproval = async (ownerEmail: {
  email: string;
}) => {
  return await axios
    .post(`${import.meta.env.VITE_ENDPOINT_ADDR}/users/approve`, ownerEmail)
    .then(async (response) => {
      return response.data;
    })
    .catch(async (error) => {
      throw new Error(await error);
    });
};
