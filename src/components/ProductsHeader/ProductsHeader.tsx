import { useCallback } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { selectProductIds } from "../../features/products/products.api"

const ProductsHeader = () => {
  const navigate = useNavigate()
  const ids = useSelector(selectProductIds)
  const navigateToAddProduct = useCallback(() => {
    navigate("addProduct")
  }, [navigate])
  return (
    <div className="w-full h-full bg-gray-800 grid grid-cols-[300px_1fr_200px] justify-end items-center px-3 top-0 left-0">
      <span className=" text-white">Total Products : {ids.length}</span>
      <div></div>
      <button
        onClick={navigateToAddProduct}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Add Product
      </button>
    </div>
  )
}

export default ProductsHeader
