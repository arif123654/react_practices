import { PRODUCTS_URL } from "../../utils/constants";
import { apiSlice } from "./apiSlice";


export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => PRODUCTS_URL,
            providesTags: ['Product'],
            keepUnusedDataFor: 5,
        }),
        getProductById: builder.query({
            query: (id) => `${PRODUCTS_URL}/${id}`,
            providesTags: ['Product'],
            keepUnusedDataFor: 5,
        }),
        
    }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApiSlice;