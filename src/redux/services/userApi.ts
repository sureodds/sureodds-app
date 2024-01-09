import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type User = {
  id: number;
  name: string;
  email: string;
};

export const userApi = createApi({
  reducerPath: "userApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "localhost:3000",
  }),
  endpoints: (builder) => ({
    getAuthUser: builder.query<User, null>({
      query: () => "users",
    }),
    getAuthUserById: builder.query<User, { id: string }>({
      query: ({ id }) => `users/${id}`,
    }),
    confirmCardRecieve: builder.mutation({
      query: ({ data, id }) => ({
        url: `/orders/${id}`,
        method: `PATCH`,
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAuthUserQuery,
  useGetAuthUserByIdQuery,
  useConfirmCardRecieveMutation,
} = userApi;
