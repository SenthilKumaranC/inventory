import { createApi } from "@reduxjs/toolkit/dist/query/react"
import baseQuery from "../../api/baseQuery"

import { EntityId, createEntityAdapter, createSelector } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

type RateType = "constant" | "variable"
export type IProduct = {
  _id: string
  name: string
  description: string
  totalQuantity: number
  unit: string
  minimumSellableQuantity: number
  pricePerMinimumSellableQuantity: number
  rateType: RateType
}

const productsAdapter = createEntityAdapter<IProduct>({
  selectId: (product: IProduct) => product._id,
})

const initialState = productsAdapter.getInitialState()

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
        transformResponse: (responseData: IProduct[]) => {
          return productsAdapter.setAll(initialState, responseData)
        },
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

export const selectProductsResult = productsApi.endpoints.getProducts.select()

export const selectProductsData = createSelector(
  selectProductsResult,
  (productssResult) => {
    console.log(productssResult)
    return productssResult.data
  },
)

export const {
  selectAll: selectAllProducts,
  selectById,
  selectIds: selectProductIds,
  selectEntities: selectProductEntities,
} = productsAdapter.getSelectors((state: RootState) => {
  console.log(selectProductsData(state))
  return selectProductsData(state) ?? initialState
})

export const selectProductById = (entityId: EntityId) => {
  return createSelector(selectProductEntities, (entities) => entities[entityId])
}

export default productsApi
