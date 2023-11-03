import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import App from "./App"
import "./index.css"
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"
import AuthPage from "./pages/Auth/Auth.page"
import DashboardPage from "./pages/Dashboard/Dashboard.page"
import ProductsPage from "./pages/ProductsPage/Products.page"
import TagsPage from "./pages/TagsPage/Tags.page"

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
            element: <ProductsPage></ProductsPage>,
          },
          {
            path: "tags",
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
