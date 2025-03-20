import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/",
  }),

  endpoints: (build) => ({
    createContact: build.mutation({
      query: (data) => ({
        url: "/contact/create",
        method: "POST",
        body: data,
      }),
    }),


    
  }),
});

export const {
  useCreateContactMutation,

} = contactApi;