import logo from "./logo.svg"
import { Counter } from "./features/counter/Counter"
import "./App.css"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { addTag, addTags } from "./features/tags/tags.slice"
import Tags from "./components/Tags/Tags"
import axios from "axios"
import AuthPage from "./pages/Auth/Auth.page"
import * as Realm from "realm-web"
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useNavigate,
} from "react-router-dom"
import "./index.css"
import { selectAuthDoc } from "./features/auth/auth.slice"
import DashboardPage from "./pages/Dashboard/Dashboard.page"

export const APP_ID = "application-0-itfjy"
export const app = new Realm.App({ id: "application-0-itfjy" })

export const axiosInstance1 = axios.create({
  baseURL: "http://localhost:4444",
})

function App() {
  const auth = useSelector(selectAuthDoc)

  const navigate = useNavigate()

  useEffect(() => {
    if (auth.accessToken) {
      navigate("dashboard")
    }
  }, [auth.accessToken, navigate])

  return (
    <div className="App">
      <Outlet />
    </div>
  )
}

export default App
