const ProductsHeader = () => {
  return (
    <div className="w-full h-full bg-gray-800 grid justify-end items-center px-3 top-0 left-0">
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Add Product
      </button>
    </div>
  )
}

export default ProductsHeader
