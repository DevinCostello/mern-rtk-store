import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),

  tagTypes: ["Product"],

  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `/products`,
      providesTags: [{ type: "Product", id: "LIST" }],
    }),

    getSingleProduct: builder.query({
      query: (id) => `/products/${id}`
    }),

    getFilteredProducts: builder.mutation({
      query: () => `/products`,
      invalidatesTags: [{ type: "Product", id: "LIST" }],
    }),

    getCart: builder.query({
      query: () => "/cart",
    }),

    createCartItem: builder.mutation({
      query: ({...item}) => {
        return {
          url: `/cart`,
          method: "POST",
          body: {...item}
        };
      },
    }),

    updateCartItem: builder.mutation({
      query: ({...cartOptions}) => {
        return {
          url: `/cart/${cartOptions.id}`,
          method: "PUT",
          body: {
            quantity: cartOptions.quantity
          }
        };
      },
    }),

    deleteCartItem: builder.mutation({
      query: ({ ...item }) => {
        return {
          url: `/cart/${item._id}`,
          method: "DELETE",
        };
      },
    }),
  
  }),
});

export const { useGetProductsQuery, useGetSingleProductQuery, useCreateCartItemMutation, useGetCartQuery, useUpdateCartItemMutation, useDeleteCartItemMutation } = apiSlice;
