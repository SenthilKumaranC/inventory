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

export default getAccessToken
