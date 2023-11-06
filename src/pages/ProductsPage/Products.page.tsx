import ProductForm from "../../components/ProductForm/ProductForm"
import Products from "../../components/Products/Products"
import ProductsHeader from "../../components/ProductsHeader/ProductsHeader"

const ProductsPage = () => {
  return (
    <div className="w-full h-full grid grid-rows-[50px_1fr] relative">
      <ProductsHeader></ProductsHeader>
      <Products></Products>
      <ProductForm></ProductForm>
    </div>
  )
}

export default ProductsPage
