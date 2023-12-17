import axios from "axios";
import { useMutation, useQuery } from "react-query";

import User from "@/types/user";
import { API_BASE_URL } from "@/constants";

export const useAuthenticatedQuery = () => {
  return useQuery({
    queryKey: ["useAuthenticatedQuery"],
    queryFn: () =>
      axios
        .get(`${API_BASE_URL}/auth/self`, {
          withCredentials: true,
        })
        .then((res) => res.data),
    retry: false,
  });
};

export const useLoginMutation = () => {
  return useMutation(
    async ({ username, password }: { username: string; password: string }) => {
      const response = await axios.post(
        `${API_BASE_URL}/auth/login`,
        {
          username,
          password,
        },
        {
          withCredentials: true,
        }
      );
      return response.data as User;
    },
    {
      retry: false,
    }
  );
};

export const useRegisterMutation = () => {
  return useMutation(
    async ({
      email,
      username,
      password,
    }: {
      email: string;
      username: string;
      password: string;
    }) => {
      const response = await axios.post(
        `${API_BASE_URL}/auth/register`,
        {
          email,
          username,
          password,
        },
        {
          withCredentials: true,
        }
      );
      return response.data as User;
    },
    {
      retry: false,
    }
  );
};

export const useGetAnalyticsQuery = () => {
  return useQuery({
    queryKey: ["analytics"],
    queryFn: () =>
      axios.get(`${API_BASE_URL}/analytics`).then((res) => res.data),
    retry: false,
  });
};
