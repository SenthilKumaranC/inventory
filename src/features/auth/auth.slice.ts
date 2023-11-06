import {
  AnyAction,
  AsyncThunk,
  PayloadAction,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
import { appLogOut } from "../../api/realmUtilities"

export interface IAuth {
  email: string | undefined
  accessToken: string | null
}

const initialState: IAuth = {
  email: "",
  accessToken: "",
}
const LOG_OUT_ACTION = "auth/logOut"
export const logOutAction = () => ({ type: LOG_OUT_ACTION })

export const logOutActionThunk: any = createAsyncThunk<void, void>(
  LOG_OUT_ACTION,
  async () => {
    await appLogOut()
  },
)

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<IAuth>) => {
      state.email = action.payload.email
      state.accessToken = action.payload.accessToken
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logOutActionThunk.fulfilled, (state) => {
      state.email = ""
      state.accessToken = ""
    })
  },
})

export const { logIn } = authSlice.actions

export const selectAuthDoc = (rootState: RootState) => rootState.auth

export default authSlice
