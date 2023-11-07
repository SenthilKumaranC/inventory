import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import App, { APP_ID } from "./App"
import "./index.css"
import {
  LoaderFunctionArgs,
  Navigate,
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom"
import AuthPage from "./pages/Auth/Auth.page"
import DashboardPage from "./pages/Dashboard/Dashboard.page"
import ProductsPage from "./pages/ProductsPage/Products.page"
import TagsPage from "./pages/TagsPage/Tags.page"
import * as Realm from "realm-web"
import ProductForm from "./components/ProductForm/ProductForm"
import DeleteProduct from "./components/DeleteProduct/DeleteProduct"

function protectedLoader({ request }: LoaderFunctionArgs) {
  const app = Realm.App.getApp(APP_ID)
  if (!app.currentUser?.accessToken) {
    let params = new URLSearchParams()
    params.set("from", new URL(request.url).pathname)
    return redirect("/")
  }
  return null
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <AuthPage></AuthPage>,
      },
      {
        path: "/dashboard",
        element: <DashboardPage></DashboardPage>,
        children: [
          {
            index: true,
            element: <Navigate to="products"></Navigate>,
          },
          {
            path: "products",
            loader: protectedLoader,
            element: <ProductsPage></ProductsPage>,
            children: [
              {
                path: "addProduct",
                element: <ProductForm></ProductForm>,
              },
              {
                path: "deleteProduct/:id",
                element: <DeleteProduct></DeleteProduct>,
              },
            ],
          },
          {
            path: "tags",
            loader: protectedLoader,
            element: <TagsPage></TagsPage>,
          },
        ],
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
