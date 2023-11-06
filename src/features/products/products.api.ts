import { createApi } from "@reduxjs/toolkit/dist/query/react"
import baseQuery from "../../api/baseQuery"
import { IProduct } from "../../components/ProductForm/ProductForm"

const productsApi = createApi({
  baseQuery,
  reducerPath: "products",
  tagTypes: ["Products"],
  endpoints: (build) => {
    return {
      getProducts: build.query<any, void>({
        query: () => ({
          url: "products",
          method: "GET",
        }),
        providesTags: ["Products"],
      }),
      addProduct: build.mutation<void, IProduct>({
        query: (newProduct) => ({
          url: "products",
          body: JSON.stringify(newProduct),
          method: "POST",
        }),
        invalidatesTags: ["Products"],
      }),
    }
  },
})

export const { useGetProductsQuery, useAddProductMutation } = productsApi

export default productsApi
