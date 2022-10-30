import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  prepareHeaders: (headers) => {
    // const token = localStorage.getItem('token')
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNWFjZWUzY2QxZjk5NzBkYmZhNDY3MyIsImlhdCI6MTY2NzE0OTg1NiwiZXhwIjoxNjY5NzQxODU2fQ.di2mBh5ku7NiE320tZwct8UaDWkPNypStK-LobJ7VqQ"
    headers.set("Accept", "application/json");
    if(token) {
      headers.set('Authorization', `Bearer ${token}`)
    }
    console.log(headers)
    return headers;
  },

  tagTypes: ["Cart", "Product"],

  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (queryStr) => `/products${queryStr}`,
      providesTags: [{type: "Product", id: "LIST"}]

    }),

    getSingleProduct: builder.query({
      query: (id) => `/products/${id}`
    }),

    getCart: builder.query({
      query: () => "/cart",
      providesTags: [{type: "Cart", id: "LIST"}],
      mode: 'cors'
    }),

    //User Mutations

    Login: builder.mutation({
      query: ({...user}) => {
        return {
          url: '/users/login',
          method: "POST",
          body: {...user},
          mode: 'cors'
        };

       
      }
    }),

    Register: builder.mutation({
      query: () => {
        return {
          url: '/users',
          method: "POST",
          body: "placeholder"
        };
      }
    }),
    
   
    //CRUD Mutations

    createCartItem: builder.mutation({
      query: ({...item}) => {
        return {
          url: `/cart`,
          method: "POST",
          body: {...item}
        };
      },
      invalidatesTags: [{type: "Cart", id: "LIST"}]
    }),

    updateCartItem: builder.mutation({
      query: ({id, quantity}) => {
        return {
          url: `/cart/${id}`,
          method: "PUT",
          body: {
            quantity: quantity
          }
        };
      },
      invalidatesTags: [{type: "Cart", id: "LIST"}]
    }),

    deleteCartItem: builder.mutation({
      query: ({ ...item }) => {
        return {
          url: `/cart/${item._id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [{type: "Cart", id: "LIST"}]
    }),
  
  }),
});

export const { useGetProductsQuery, useGetSingleProductQuery, useCreateCartItemMutation, useGetCartQuery, useUpdateCartItemMutation, useDeleteCartItemMutation, useLoginMutation } = apiSlice;
