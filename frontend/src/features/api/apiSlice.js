import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://mern-store-api.onrender.com/api', 
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token')  
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers;
    },
  }),
  tagTypes: ["Cart", "Product", "User"],

  endpoints: (builder) => ({

    getProducts: builder.query({
      query: (queryStr) => `/products${queryStr}`,
      providesTags: [{ type: "Product", id: "LIST" }]
      
    }),

    getSingleProduct: builder.query({
      query: (id) => `/products/${id}`
    }),

    getCart: builder.query({
      query: () => "/cart",
      providesTags: [{ type: "Cart", id: "LIST" }],
    }),

    getUser: builder.query({
      query: () => "/users/me",
      providesTags: [{ type: "User", id: "LIST" }],
    }),

    getFilters: builder.query({
      query: () => "/filters",
    }),

    //User Mutations

    Login: builder.mutation({
      query: ({ ...user }) => {
        return {
          url: '/users/login',
          method: "POST",
          body: { ...user },
        };
      },
      invalidatesTags: [{ type: "Cart", id: "LIST" }]

    }),

    Register: builder.mutation({
      query: ({...user}) => {
        return {
          url: '/users',
          method: "POST",
          body: {...user},
        };
      },
      invalidatesTags: [{ type: "Cart", id: "LIST" }]

    }),

  
    //CRUD Mutations

    createCartItem: builder.mutation({
      query: ({ ...item }) => {
        return {
          url: `/cart`,
          method: "POST",
          body: { ...item }
        };
      },
      invalidatesTags: [{ type: "Cart", id: "LIST" }]
    }),

    updateCartItem: builder.mutation({
      query: ({ id, quantity }) => {
        return {
          url: `/cart/${id}`,
          method: "PUT",
          body: {
            quantity: quantity
          }
        };
      },
      invalidatesTags: [{ type: "Cart", id: "LIST" }]
    }),

    deleteCartItem: builder.mutation({
      query: ({ ...item }) => {
        return {
          url: `/cart/${item._id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [{ type: "Cart", id: "LIST" }]
    }),

  }),
});

export const { useGetProductsQuery, useGetSingleProductQuery, useGetFiltersQuery, useGetUserQuery, useCreateCartItemMutation, useGetCartQuery, useUpdateCartItemMutation, useDeleteCartItemMutation, useLoginMutation, useRegisterMutation } = apiSlice;
