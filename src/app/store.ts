import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import tagsSlice from "../features/tags/tags.slice"
import productsSlice from "../features/products/products.slice"
import createSagaMiddlware from "redux-saga"
import watchSignInHandler from "../features/auth/signIn.saga"
import authSlice from "../features/auth/auth.slice"
import tagsApi from "../features/tags/tags.query"

const sagaMiddlware = createSagaMiddlware()

export const store = configureStore({
  middleware: (gM) => [...gM(), sagaMiddlware, tagsApi.middleware],
  reducer: {
    counter: counterReducer,
    auth: authSlice.reducer,
    tags: tagsSlice.reducer,
    products: productsSlice.reducer,
    [tagsApi.reducerPath]: tagsApi.reducer,
  },
})

sagaMiddlware.run(watchSignInHandler)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
