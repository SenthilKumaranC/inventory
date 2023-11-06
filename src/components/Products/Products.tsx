import { useGetProductsQuery } from "../../features/products/products.api"

const Products = () => {
  const { data, isLoading } = useGetProductsQuery()
  console.log(data, isLoading)
  return (
    <>
      {data.map((singleData: any) => {
        return <div>{JSON.stringify(singleData)}</div>
      })}
    </>
  )
}

export default Products
