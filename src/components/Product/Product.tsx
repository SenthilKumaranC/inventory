import { useSelector } from "react-redux"
import {
  selectProductById,
  selectProductsData,
  useGetProductsQuery,
} from "../../features/products/products.api"
import { useCallback, useEffect, useMemo, useRef } from "react"
import "animate.css"

interface IId {
  id: string
  index: number
}
const Product = ({ id, index }: IId) => {
  const product = useSelector(selectProductById(id))

  const onMount = useRef<boolean>(true)

  const animationClass = useMemo(() => {
    if (onMount.current) {
      onMount.current = false
      return "animate__animated animate__fadeIn"
    }
    return ""
  }, [])

  const onProductMount = useCallback((ref: HTMLDivElement) => {
    ref?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }, [])

  return (
    <>
      {!!product && (
        <>
          <div
            ref={onProductMount}
            className={`${animationClass} grid grid-cols-[50px_1fr_1fr_1fr] divide-x-2 divide-solid divide-black border-b-2 border-black border-solid ${
              index % 2 ? "bg-gray-200" : "bg-white"
            }`}
          >
            <span className="w-full h-full flex items-center justify-center font-semibold bg-blue-100">
              {index + 1}
            </span>
            <span className="w-full h-full flex items-center justify-center font-semibold">
              {product.name}
            </span>
            <span className="w-full h-full flex items-center justify-center font-semibold">
              {product.totalQuantity}
            </span>
            <span className="w-full h-full flex items-center justify-center font-semibold">
              {product.unit}
            </span>
          </div>
        </>
      )}
    </>
  )
}

export default Product
