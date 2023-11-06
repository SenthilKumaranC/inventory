/* import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

export interface IProduct {
  id: string
  name: string
  description: string
  rating: number
  testimony: string[]
  specification: any[]
  lowestQanitytValue: number
  mutiple: number
  perQuantityValue: number
  price: number
  currency: string
  tagId: string
  filters: string[]
}

const entityAdapter = createEntityAdapter<IProduct>({})

const productsSlice = createSlice({
  name: "products",
  initialState: entityAdapter.getInitialState(),
  reducers: {
    addProduct: entityAdapter.addOne,
    addProducts: entityAdapter.addMany,
    deleteProduct: entityAdapter.removeOne,
  },
})

export const { addProduct, addProducts, deleteProduct } = productsSlice.actions
export const selectProducts = (rootState: RootState) => rootState.products

export const { selectAll: selectAllProducts } =
  entityAdapter.getSelectors(selectProducts)

export default productsSlice
 */
