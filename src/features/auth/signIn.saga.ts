import { put, takeEvery } from "redux-saga/effects"
import * as Realm from "realm-web"
import { APP_ID } from "../../App"
import { logIn } from "./auth.slice"

const SIGN_IN = "SIGN_IN"
export const signInAction = (username: string, password: string) => ({
  type: SIGN_IN,
  payload: {
    username,
    password,
  },
})

function* signInHandler(action: ReturnType<typeof signInAction>) {
  const data = action.payload
  const app = Realm.App.getApp(APP_ID)
  const credentials = Realm.Credentials.emailPassword(
    data.username,
    data.password,
  )
  try {
    const user: Realm.User = yield app.logIn(credentials)
    yield put(
      logIn({
        email: user.profile.email,
        accessToken: user.accessToken,
      }),
    )
  } catch (e) {}
}

function* watchSignInHandler() {
  yield takeEvery(SIGN_IN, signInHandler)
}

export default watchSignInHandler
