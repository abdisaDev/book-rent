import axios from "axios";

export const useUpdateOwnersStatus = async (ownerEmail: { email: string }) => {
  return await axios
    .post(`${import.meta.env.VITE_ENDPOINT_ADDR}/users/activate`, ownerEmail, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
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
    .post(`${import.meta.env.VITE_ENDPOINT_ADDR}/users/approve`, ownerEmail, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
    .then(async (response) => {
      return response.data;
    })
    .catch(async (error) => {
      throw new Error(await error);
    });
};
