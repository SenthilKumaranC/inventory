import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

export interface ITag {
  id: string
  parentId: string
  name: string
  level: number
  parentName: string
}

const entityAdapter = createEntityAdapter<ITag>({})

const tagsSlice = createSlice({
  name: "tags",
  initialState: entityAdapter.getInitialState(),
  reducers: {
    addTag: entityAdapter.addOne,
    addTags: entityAdapter.addMany,
    deleteTag: entityAdapter.removeOne,
  },
})

export const { addTag, addTags, deleteTag } = tagsSlice.actions
export const selectTags = (rootState: RootState) => rootState.tags

export const { selectAll: selectAllTags } =
  entityAdapter.getSelectors(selectTags)

export default tagsSlice
