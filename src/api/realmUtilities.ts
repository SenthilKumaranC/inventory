import { APP_ID } from "../App"
import * as Realm from "realm-web"

function getAccessToken() {
  const app = Realm.App.getApp(APP_ID)
  const token = app.currentUser?.accessToken
  return token
}

export async function appLogOut() {
  const app = Realm.App.getApp(APP_ID)
  await app.currentUser?.logOut()
}

export async function appLogIn(username: string, password: string) {
  const app = Realm.App.getApp(APP_ID)
  const credentials = Realm.Credentials.emailPassword(username, password)
  const user = await app.logIn(credentials)
  return { accessToken: user.accessToken, email: user.profile.email }
}

export default getAccessToken
