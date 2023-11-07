import { useSelector } from "react-redux"
import {
  selectProductById,
  selectProductIds,
  useGetProductsQuery,
} from "../../features/products/products.api"
import Product from "../Product/Product"
import { useMemo } from "react"
import { Outlet } from "react-router-dom"

const Products = () => {
  const { isLoading } = useGetProductsQuery()
  const ids = useSelector(selectProductIds)

  const products = useMemo(() => {
    return ids?.map((id: any, index) => {
      return <Product key={id} id={id} index={index}></Product>
    })
  }, [ids])

  const firstProduct = useSelector(selectProductById(ids[0]))

  const productsColumnHeader = useMemo(() => {
    if (!firstProduct) return <></>
    const productKeys = Object.keys(firstProduct)
    const idIndex = productKeys.findIndex((key) => key === "_id")
    productKeys.splice(idIndex, 1)
    const descriptionIndex = productKeys.findIndex(
      (key) => key === "description",
    )
    productKeys.splice(descriptionIndex, 1)
    productKeys.unshift("S.No")
    productKeys.push("Actions")
    return (
      <div className="grid grid-cols-[50px_1fr_1fr_1fr_300px] divide-x-2 divide-solid divide-black w-full h-full">
        {productKeys.map((key) => (
          <span
            className=" bg-blue-400 w-full h-full flex items-center justify-center font-extrabold text-lg "
            key={key}
          >
            {key.toUpperCase()}
          </span>
        ))}
      </div>
    )
  }, [firstProduct])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      {firstProduct && (
        <div className="w-full h-full">
          <div className="grid h-[100vh - 100px] grid-rows-[40px_1fr] overflow-hidden h-full w-full bg-white divide-y-2 divide-solid divide-black border-solid border-black border-2">
            {productsColumnHeader}
            <div
              style={{ height: "calc(100vh - 140px)" }}
              className="flex flex-col overflow-y-scroll"
            >
              {products}
            </div>
          </div>
        </div>
      )}
      <Outlet></Outlet>
    </>
  )
}

export default Products
