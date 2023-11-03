import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

export interface IAuth {
  email: string | undefined
  accessToken: string | null
}

const initialState: IAuth = {
  email: "",
  accessToken: "",
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authReceieved: (state, action: PayloadAction<IAuth>) => {
      state.email = action.payload.email
      state.accessToken = action.payload.accessToken
    },
  },
})

export const { authReceieved } = authSlice.actions

export const selectAuthDoc = (rootState: RootState) => rootState.auth

export default authSlice
