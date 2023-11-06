import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import tagsSlice from "../features/tags/tags.slice"
import createSagaMiddlware from "redux-saga"
import watchSignInHandler from "../features/auth/signIn.saga"
import authSlice from "../features/auth/auth.slice"
import tagsApi from "../features/tags/tags.query"
import productsApi from "../features/products/products.api"

const sagaMiddlware = createSagaMiddlware()

export const store = configureStore({
  middleware: (gM) => [
    ...gM(),
    sagaMiddlware,
    tagsApi.middleware,
    productsApi.middleware,
  ],
  reducer: {
    auth: authSlice.reducer,
    tags: tagsSlice.reducer,
    [tagsApi.reducerPath]: tagsApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
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
