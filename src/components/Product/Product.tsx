import { useGetProductsQuery } from "../../features/products/products.api"

const Product = () => {
  const { data, isLoading } = useGetProductsQuery()
  console.log(data, isLoading)
  return <>{}</>
}

export default Product
