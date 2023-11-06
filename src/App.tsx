import { useSelector } from "react-redux"
import { useEffect } from "react"
import axios from "axios"
import * as Realm from "realm-web"
import { Outlet, useNavigate } from "react-router-dom"
import "./index.css"
import { logIn, selectAuthDoc } from "./features/auth/auth.slice"
import { useAppDispatch } from "./app/hooks"

export const APP_ID = "application-0-itfjy"
export const app = new Realm.App({ id: "application-0-itfjy" })

export const axiosInstance1 = axios.create({
  baseURL: "http://localhost:4444",
})

function App() {
  const auth = useSelector(selectAuthDoc)

  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  useEffect(() => {
    if (
      app.currentUser &&
      app.currentUser?.accessToken &&
      app.currentUser?.profile.email
    ) {
      dispatch(
        logIn({
          accessToken: app.currentUser?.accessToken,
          email: app.currentUser?.profile.email,
        }),
      )
    }
  }, [dispatch])

  useEffect(() => {
    if (auth.accessToken) {
      navigate("dashboard")
    } else {
      navigate("/")
    }
  }, [auth.accessToken, navigate])

  return (
    <div className="w-scree h-screen">
      <Outlet />
    </div>
  )
}

export default App
