import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
import { appLogIn, appLogOut } from "../../api/realmUtilities"

export interface IAuth {
  email: string | undefined
  accessToken: string | null
}

const initialState: IAuth = {
  email: "",
  accessToken: "",
}
export const logOutActionThunk: any = createAsyncThunk<void, void>(
  "auth/logOut",
  async (_, thunkAPI) => {
    await appLogOut()
    thunkAPI.dispatch(logOut())
  },
)

export const logInActionThunk: any = createAsyncThunk<
  void,
  { username: string; password: string }
>("auth/logIn", async ({ username, password }, thunkAPI): Promise<any> => {
  const data = await appLogIn(username, password)
  thunkAPI.dispatch(logIn(data))
})

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<IAuth>) => {
      state.email = action.payload.email
      state.accessToken = action.payload.accessToken
    },
    logOut: (state) => {
      state.email = ""
      state.accessToken = ""
    },
  },
})

export const { logIn, logOut } = authSlice.actions

export const selectAuthDoc = (rootState: RootState) => rootState.auth

export default authSlice
